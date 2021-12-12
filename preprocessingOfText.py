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
 







