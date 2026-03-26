"""
Script para limpar o CSS antigo duplicado do home.component.css
Execute: python fix_css.py
"""
import os

css_file = r'C:\git\cli_ar_homepage\src\app\pages\home\home.component.css'

with open(css_file, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Manter apenas até a linha com as critical overrides (novo CSS completo)
# O CSS correto termina após o bloco "@media screen and (min-width: 568px)"
# que está aproximadamente na linha 565
clean_lines = lines[:565]

with open(css_file, 'w', encoding='utf-8') as f:
    f.writelines(clean_lines)

print(f'CSS limpo! Arquivo agora tem {len(clean_lines)} linhas.')
print('CSS antigo duplicado removido com sucesso.')
