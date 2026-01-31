export async function compressImage(file, maxSize = 2048, quality = 0.9) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = URL.createObjectURL(file);

        img.onload = () => {
            let { width, height } = img;

            // scale down if needed
            if (Math.max(width, height) > maxSize) {
                const scale = maxSize / Math.max(width, height);
                width = Math.round(width * scale);
                height = Math.round(height * scale);
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(
                blob => {
                    if (!blob) reject("Compression failed");
                    resolve(
                        new File([blob], file.name.replace(/\.\w+$/, ".jpg"), {
                            type: "image/jpeg"
                        })
                    );
                },
                "image/jpeg",
                quality
            );
        };

        img.onerror = reject;
    });
}
