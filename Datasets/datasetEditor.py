
# coding: utf-8

# In[25]:

#Paquetes
import numpy as np
import pandas as pd
import re,ast


# In[2]:

dataset=pd.read_csv('movies_metadata.csv')


# In[3]:

dataset


# In[5]:

print(dataset.columns)


# In[207]:

x=dataset.drop(['adult','belongs_to_collection','imdb_id','id','status','vote_average','vote_count','popularity','video','poster_path','homepage','tagline','spoken_languages','title'],axis=1)


# In[208]:

x


# In[209]:

#genre
for i in range(len(x)):
    print(i)
    try:
        x.at[i, 'genres']=ast.literal_eval(re.search('({.+})', x.loc[i][1]).group(0))[0]['name']
    except:
        try:
            x.at[i, 'genres']=ast.literal_eval(re.search('({.+})', x.loc[i][1]).group(0))['name']
        except:
            x.at[i, 'genres']="other"


# In[210]:

#prodCompanies
for i in range(len(x)):
    print(i)
    try:
        x.at[i, 'production_companies']=ast.literal_eval(re.search('({.+})', x.loc[i][5]).group(0))[0]['name']
    except:
        try:
            x.at[i, 'production_companies']=ast.literal_eval(re.search('({.+})', x.loc[i][5]).group(0))['name']
        except:
            x.at[i, 'production_companies']="other"


# In[211]:

#prodCountries
for i in range(len(x)):
    print(i)
    try:
        x.at[i, 'production_countries']=ast.literal_eval(re.search('({.+})', x.loc[i][6]).group(0))[0]['name']
    except:
        try:
            x.at[i, 'production_countries']=ast.literal_eval(re.search('({.+})', x.loc[i][6]).group(0))['name']
        except:
            x.at[i, 'production_countries']="other"


# In[212]:

df=x


# In[213]:

df = df.rename(columns={'genres': 'genre', 'production_companies': 'production_company','production_countries':'production_country'})


# In[214]:

df


# In[ ]:




# In[ ]:




# In[215]:




# In[216]:

x.to_csv('moviesDB.csv') #anual database)

