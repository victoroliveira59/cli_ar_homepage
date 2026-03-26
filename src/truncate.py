with open(r'C:\git\cli_ar_homepage\src\app\pages\home\home.component.css', 'r', encoding='utf-8') as f:
    lines = f.readlines()
lines = lines[:423]
with open(r'C:\git\cli_ar_homepage\src\app\pages\home\home.component.css', 'w', encoding='utf-8') as f:
    f.writelines(lines)
print(f'Done. File now has {len(lines)} lines.')
