const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.goto('http://localhost:8000/index.html', { waitUntil: 'networkidle2' });
    await page.pdf({
        path: '/rr/resume.pdf',
        format: 'A4',
        margin: {
            top: '1cm',
            left: '1cm',
            right: '1cm',
            bottom: '1cm'
        }
    });

    await browser.close();
})();