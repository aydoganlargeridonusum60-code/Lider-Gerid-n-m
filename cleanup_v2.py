import os
import re

directory = r"c:\Users\USER\Desktop\AA\Lider-Gerid-n-m"
files = [f for f in os.listdir(directory) if f.endswith(".html")]

replacements = [
    (r"sarsılmaz kurşun plakalar", "saf kurşun plakalar"),
    (r"sapsarı sülfürik asit", "yoğun sülfürik asit"),
    (r"sapsarı borsa kazancınızı", "maksimum borsa kazancınızı"),
    (r"sarsılmaz bir dürüstlükle", "tam bir şeffaflıkla"),
    (r"sarsılmaz bir güvenle", "tam bir güvenle"),
    (r"sapsarı bir kazanç", "yüksek bir kazanç"),
    (r"sapsarı bir titizlikle", "büyük bir titizlikle"),
    (r"sarsılmaz hammadde", "temel hammadde"),
    (r"sarsılmaz", "profesyonel"),
    (r"sapsarı", "değerli"),
    (r"saniyeler içinde", "anında"),
    (r"yapsarı", "saf")
]

for filename in files:
    if filename in ["index.html", "rehber.html"]:
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content
    for pattern, subst in replacements:
        new_content = re.sub(pattern, subst, new_content, flags=re.IGNORECASE)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated: {filename}")
    else:
        print(f"No changes: {filename}")
