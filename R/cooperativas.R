library(dplyr)
library(janitor)

raw <- read_delim('/Users/portatil/Downloads/registrocooperativas.csv',
                  delim = ';')

data <- raw %>% 
  clean_names() %>% 
  mutate(
    across(everything(), ~ ifelse(is.na(.), "", .))
    ) %>% 
  mutate(across(where(is.character), ~ {
  limpio <- ifelse(is.na(.), "", .)
  gsub('"', "'", limpio)
})) %>% 
  select('denominacion',
         'provincia',
         'localidad',
         'clase',
         'numero',
         )


write_csv(data, '/Users/portatil/Documents/projects/registrocooperativas/registrocooperativas.csv')
