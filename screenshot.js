import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set viewport to a reasonable desktop size
    await page.setViewport({ width: 1440, height: 1080 });

    // Add a small delay to ensure server is ready (though it should be)
    // and load the page
    try {
        console.log('Navigating to contact page...');
        await page.goto('http://localhost:5173/contact', { waitUntil: 'networkidle0' });

        // Wait for animations
        await new Promise(r => setTimeout(r, 1000));

        const outputPath = path.join('C:/Users/mucho/.gemini/antigravity/brain/c03fcd17-2faf-4f56-bcff-74af19941631', 'contact_page_proof.png');

        console.log('Taking screenshot...');
        await page.screenshot({ path: outputPath, fullPage: true });

        console.log(`Screenshot saved to ${outputPath}`);
    } catch (e) {
        console.error('Error taking screenshot:', e);
    } finally {
        await browser.close();
    }
})();
