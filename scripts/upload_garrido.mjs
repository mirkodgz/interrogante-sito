import { v2 as cloudinary } from 'cloudinary';
import path from 'path';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: 'dskliu1ig',
    api_key: '538724966551851',
    api_secret: 'Q1fP7-pH6iiltPbFNkqPn0d93no'
});

const uploadFolder = 'interrogante-sito';
const sourceDir = path.join(process.cwd(), 'public', 'imagenes');

const filesToUpload = [
    'La_Familia_Garrigo_hero.jpg',
    'La_Familia_Garrigo5.mp4',
    'La_Familia_Garrigo1.mp4',
    'La_Familia_Garrigo2.mp4',
    'La_Familia_Garrigo3.mp4',
    'La_Familia_Garrigo4.mp4'
];

async function uploadFiles() {
    console.log("Starting upload...");
    const results = {};

    for (const file of filesToUpload) {
        const filePath = path.join(sourceDir, file);
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            continue;
        }

        const resourceType = file.endsWith('.mp4') ? 'video' : 'image';
        console.log(`Uploading ${file}...`);

        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder: uploadFolder,
                resource_type: resourceType,
                public_id: file.split('.')[0] // Use filename as public_id
            });
            console.log(`✅ Uploaded ${file}: ${result.secure_url}`);
            results[file] = result.secure_url;
        } catch (error) {
            console.error(`❌ Error uploading ${file}:`, error);
        }
    }

    console.log("\n--- UPLOAD SUMMARY ---");
    console.log(JSON.stringify(results, null, 2));
    fs.writeFileSync('cloudinary_urls.json', JSON.stringify(results, null, 2));
    console.log("Saved URLs to cloudinary_urls.json");
}

uploadFiles();
