import os
from PIL import Image

IMG_DIR = os.path.join(os.getcwd(), 'src', 'assets', 'img')

def optimize_images():
    total_original = 0
    total_optimized = 0
    converted_count = 0

    for root, dirs, files in os.walk(IMG_DIR):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in ['.png', '.jpg', '.jpeg']:
                file_path = os.path.join(root, file)
                orig_size = os.path.getsize(file_path)
                total_original += orig_size

                base_name = os.path.splitext(file)[0]
                webp_path = os.path.join(root, f"{base_name}.webp")

                try:
                    with Image.open(file_path) as img:
                        # Converte para RGBA ou RGB
                        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                            mode = 'RGBA'
                        else:
                            mode = 'RGB'
                        img = img.convert(mode)

                        # Redimensiona se maior que 1200px na maior dimensao
                        max_dimension = 1200
                        width, height = img.size
                        if width > max_dimension or height > max_dimension:
                            if width >= height:
                                new_width = max_dimension
                                new_height = int(height * (max_dimension / width))
                            else:
                                new_height = max_dimension
                                new_width = int(width * (max_dimension / height))
                            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

                        # Salva como WebP
                        img.save(webp_path, 'WEBP', quality=82, method=6)

                        webp_size = os.path.getsize(webp_path)
                        total_optimized += webp_size
                        converted_count += 1
                        ratio = (1 - webp_size / orig_size) * 100
                        print(f"[OK] {file} ({orig_size/1024:.1f} KB) -> {base_name}.webp ({webp_size/1024:.1f} KB) [-{ratio:.1f}%]")
                except Exception as e:
                    print(f"[ERRO] ao converter {file}: {e}")

    print("\n========================================")
    print(f"Total convertido : {converted_count} imagens")
    print(f"Tamanho Original : {total_original / (1024*1024):.2f} MB")
    print(f"Tamanho WebP     : {total_optimized / (1024*1024):.2f} MB")
    print(f"Economia Total   : {(1 - total_optimized / total_original) * 100:.1f}%")
    print("========================================")

if __name__ == '__main__':
    optimize_images()
