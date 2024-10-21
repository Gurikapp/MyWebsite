import fs from 'fs';
import path from 'path';

export async function get() {
    const directoryPath = path.join(process.cwd(), 'static/images/photos'); // Замените на ваш путь

    try {
        const files = fs.readdirSync(directoryPath);
        return {
            status: 200,
            body: { files }
        };
    } catch (error) {
        return {
            status: 500,
            body: { error: 'Ошибка при чтении директории.' }
        };
    }
}
