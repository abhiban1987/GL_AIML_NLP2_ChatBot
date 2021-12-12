#!/usr/bin/env python
# coding: utf-8

# In[46]:


### requirements.txt
import re
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
stop = stopwords.words('english')
import pandas as pd
import contractions
from autocorrect import Speller
from wordcloud import WordCloud
import matplotlib.pyplot as plt
spell = Speller(lang='en')
from datetime import datetime


# In[47]:


from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer


# In[48]:


porter=PorterStemmer()


# In[59]:


#basic preprocessing
class PreProcessing:
    def __init__(self, get_lower_case=False,
                        remove_whitespaces=False,
                        remove_spl_char=False,
                        replace_contractions=False,
                        split_attached_words=False,
                        get_spell_check=False,
                        remove_stop_words=False,
                        remove_time_sequence=False,
                        stem_sentence=False
                ):
        
        self.get_lower_case=get_lower_case
        self.remove_whitespaces=remove_whitespaces
        self.remove_spl_char=remove_spl_char
        self.replace_contractions=replace_contractions
        self.split_attached_words=split_attached_words
        self.get_spell_check=get_spell_check
        self.remove_stop_words=remove_stop_words
        self.remove_time_sequence=remove_time_sequence
        self.stem_sentence=stem_sentence


    def getLowerCase(self, text):
        return text.lower()

    def replaceContractions(self, text):
        return contractions.fix(text)
    
    def splitAttachedWords(self, text):
        return " ".join([s for s in re.split("([A-Z][a-z]+[^A-Z]*)",text) if s])
    
    def getSpellCheck(self, text):
        return spell(text)
    
    def removeWhiteSpace(self, text):
        text = re.sub('\W+',' ',text)
        return text.strip()
    
    def removeSpecialCharacters(self,text):
        text=re.sub('[^A-Za-z0-9]+', ' ', text)
        return text
    
    def removeTimeSequence(self,text):
        text=re.sub("\s(\d{2}\:\d{2}\s?(?:AM|PM|am|pm|a.m|p.m))",' ',text)
        return text
    
    def removeStopWords(self,text):
        words=word_tokenize(text)
        words_new=[i for i in words if i not in stop]
        return " ".join(words_new)
    
    def stemSentence(self,text):
        token_words=word_tokenize(text)
        stem_sentence=[]
        for word in token_words:
            stem_sentence.append(porter.stem(word))
            stem_sentence.append(" ")
        return " ".join(stem_sentence)
    
    
    def preprocess(self, text):
                    
        if self.split_attached_words:
            text = self.splitAttachedWords(text)
  
        if self.get_lower_case:
            text = self.getLowerCase(text)

        if self.replace_contractions:
            text = self.replaceContractions(text)
    
        if self.get_spell_check:
            text = self.getSpellCheck(text)
            
        if self.remove_time_sequence:
            text = self.removeTimeSequence(text)

        if self.remove_spl_char:
            text = self.removeSpecialCharacters(text)

        if self.remove_whitespaces:
            text = self.removeWhiteSpace(text)
         
        if self.remove_stop_words:
            text=self.removeStopWords(text)
        
        if self.stem_sentence:
            text=self.stemSentence(text)
            

        return text
 


# ## improvements 
# * custom regex == machine number pattern 
# * number at time part 
# * import config 

# In[50]:


import config as cf


# ## 
# 
# %%writefile config.py
# get_lower_case=True
# remove_whitespaces=True
# remove_spl_char=True
# replace_contractions=True
# split_attached_words=True
# get_spell_check=True
# remove_stop_words=True

# In[8]:


import importlib
importlib.reload(cf)


# In[7]:


df=pd.read_csv('Data Set - industrial_safety_and_health_database_with_accidents_description.csv')


# In[61]:


pp = PreProcessing(get_lower_case=cf.get_lower_case,
remove_whitespaces=cf.remove_whitespaces,
remove_spl_char=cf.remove_spl_char,
replace_contractions=cf.replace_contractions,
split_attached_words=cf.split_attached_words,
get_spell_check=cf.get_spell_check,
remove_stop_words=cf.remove_stop_words,
remove_time_sequence=cf.remove_time_sequence,
stem_sentence=cf.stem_sentence                  
)


# In[40]:


new_df = df.Description.str.split(expand=True).stack().value_counts().reset_index()
new_df.columns = ['Word', 'Frequency'] 
new_df['Frequency'].sum()


# In[65]:


new_df = df.pre_text.str.split(expand=True).stack().value_counts().reset_index()
new_df.columns = ['Word', 'Frequency'] 
new_df['Frequency'].sum()


# In[38]:


def get_words_increase_decrease(newColName):
    new_df_1 = df['{}'.format(newColName)].str.split(expand=True).stack().value_counts().reset_index()
    new_df_1.columns = ['Word', 'Frequency'] 
    return (new_df_1['Frequency'].sum() -new_df['Frequency'].sum())


# In[51]:


st=datetime.now()
df['split_attached']=df['Description'].apply(pp.splitAttachedWords)
df['lower_cased']=df['Description'].apply(pp.getLowerCase)
df['contractioned']=df['Description'].apply(pp.replaceContractions)
df['spell_checked']=df['Description'].apply(pp.getSpellCheck)
df['removed_time_seq']=df['Description'].apply(pp.removeTimeSequence)
df['removed_spl_char']=df['Description'].apply(pp.removeSpecialCharacters)
df['removed_white_spaces']=df['Description'].apply(pp.removeWhiteSpace)
df['removed_stop_words']=df['Description'].apply(pp.removeStopWords)
df['stemmed_sentence']=df['Description'].apply(pp.stemSentence)
print(datetime.now()-st)


# In[52]:


cols=['split_attached','lower_cased'
      ,'contractioned','spell_checked'
      ,'removed_time_seq','removed_spl_char'
     ,'removed_white_spaces','removed_stop_words','stemmed_sentence']


# In[57]:


for i in cols:
    print(i,":",get_words_increase_decrease(i))


# In[62]:


st=datetime.now()
df['pre_text']=df['Description'].apply(pp.preprocess)
print(datetime.now()-st)


# In[63]:


wordcloud = WordCloud(width = 1500, height = 800, random_state=0, background_color='black', colormap='rainbow',                       min_font_size=5, max_words=9000, collocations=False).generate(" ".join(df.loc[df['Description'].notna(),'Description'].values))
plt.figure(figsize=(15,10))
plt.imshow(wordcloud)
plt.axis('off')
plt.show()


# In[64]:


wordcloud = WordCloud(width = 1500, height = 800, random_state=0, background_color='black', colormap='rainbow',                       min_font_size=5, max_words=4000, collocations=False).generate(" ".join(df.loc[df['pre_text'].notna(),'pre_text'].values))
plt.figure(figsize=(15,10))
plt.imshow(wordcloud)
plt.axis('off')
plt.show()


# In[ ]:





# In[ ]:





# In[ ]:


pip install quantulum3


# In[ ]:


from quantulum3 import parser


# In[ ]:


quants = parser.parse(df['Description'][4])


# In[ ]:


quants


# In[ ]:


df['time']=df['Description'].apply(lambda x:re.findall("\s(\d{2}\:\d{2}\s?(?:AM|PM|am|pm|a.m|p.m))", x))


# In[ ]:


df['time'][7]


# In[ ]:


df['Description'][10]


# In[ ]:


ind=20
print("Description ::: {}".format(df['Description'][ind]))
print("")
print("preprocessed_txt:::{}".format(df['pre_text'][ind]))


# In[ ]:


## 
# from textblob import TextBlob
# txt='Sampel txet'
# pp.getSpellCheck(txt)
# textBlb = TextBlob(txt)            # Making our first textblob
# textBlb.correct() 


# In[ ]:




