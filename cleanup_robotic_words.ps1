$files = Get-ChildItem -Path "c:\Users\USER\Desktop\AA\Lider-Gerid-n-m" -Filter "*.html"
$replacements = @{
    "sarsılmaz" = "profesyonel";
    "sapsarı" = "değerli";
    "saniyeler içinde" = "hızla";
    "yapsarı" = "sarı";
    "sarsılmaz bir" = "güçlü bir";
    "sapsarı bir" = "yüksek bir"
}

foreach ($file in $files) {
    if ($file.Name -eq "index.html" -or $file.Name -eq "rehber.html") { continue }
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    
    # Specific Context Replacements
    $content = $content -replace "sarsılmaz kurşun plakalar", "saf kurşun plakalar"
    $content = $content -replace "sapsarı sülfürik asit", "yoğun sülfürik asit"
    $content = $content -replace "sapsarı borsa kazancınızı", "maksimum borsa kazancınızı"
    $content = $content -replace "sarsılmaz bir dürüstlükle", "tam bir şeffaflıkla"
    $content = $content -replace "sarsılmaz bir güvenle", "tam bir güvenle"
    $content = $content -replace "sapsarı bir kazanç", "yüksek bir kazanç"
    $content = $content -replace "sapsarı bir titizlikle", "büyük bir titizlikle"
    $content = $content -replace "sarsılmaz hammadde", "temel hammadde"
    
    # General Replacements
    $content = $content -replace "sarsılmaz", "profesyonel"
    $content = $content -replace "sapsarı", "değerli"
    $content = $content -replace "saniyeler içinde", "anında"
    $content = $content -replace "yapsarı", "saf"
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
