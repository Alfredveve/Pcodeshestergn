import os
from PIL import Image

def optimize_images(directory, quality=80):
    """
    Optimise les images dans le répertoire spécifié en les compressant.
    """
    supported_extensions = ('.jpg', '.jpeg', '.png')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(supported_extensions):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        original_size = os.path.getsize(file_path)
                        
                        # Conversion en RGB si nécessaire pour JPEG
                        if img.mode in ("RGBA", "P") and file.lower().endswith(('.jpg', '.jpeg')):
                            img = img.convert("RGB")
                            
                        # Sauvegarde avec compression
                        if file.lower().endswith('.png'):
                            img.save(file_path, optimize=True)
                        else:
                            img.save(file_path, quality=quality, optimize=True)
                            
                        new_size = os.path.getsize(file_path)
                        gain = (original_size - new_size) / 1024
                        if gain > 0:
                            print(f"Optimisé : {file} (-{gain:.2f} KB)")
                        else:
                            print(f"Déjà optimisé : {file}")
                except Exception as e:
                    print(f"Erreur sur {file} : {e}")

if __name__ == "__main__":
    media_dir = os.path.join(os.getcwd(), 'media')
    print(f"Démarrage de l'optimisation dans {media_dir}...")
    optimize_images(media_dir)
    print("Optimisation terminée !")
