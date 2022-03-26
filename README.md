<a href="https://imgc.ezralazuardy.com/">
  <img src="https://therealsujitk-vercel-badge.vercel.app/?app=imgc.ezralazuardy" alt="Deployment">
</a>
<a href="https://github.com/ezralazuardy/image-classifier/actions/workflows/codeql-analysis.yml">
  <img src="https://img.shields.io/github/workflow/status/ezralazuardy/image-classifier/CodeQL?label=security" alt="CodeQL Security Analysis" target="_blank" rel="noopener noreferrer">
</a>
<a href="https://github.com/ezralazuardy/image-classifier/blob/master/LICENSE">
  <img src="https://img.shields.io/github/license/ezralazuardy/image-classifier" alt="License" target="_blank" rel="noopener noreferrer">
</a>
<a href="https://web.dev/progressive-web-apps">
    <img alt="PWA Support" src="https://img.shields.io/badge/%20pwa-enabled-blueviolet">
</a>

## 🖼️ Image Classifier

A simple web application to perform an image classification process based on image file input or video stream (webcam). The use case is to classify a **cat** or **dog** object inside the image target.

Preview: [https://imgc.ezralazuardy.com](https://imgc.ezralazuardy.com)

![image](https://user-images.githubusercontent.com/24422019/160217140-f2164c3e-4b86-4839-9769-9275991aeef5.png)

> Get the supervised machine learning model [here](https://teachablemachine.withgoogle.com/models/iDck0-wxs). All of the image model is based on [erkamk/cat-and-dog-images-dataset](https://www.kaggle.com/datasets/erkamk/cat-and-dog-images-dataset).

> This app is written in [Typescript](https://www.typescriptlang.org) using [Vue](https://vuejs.org), [Vuex](https://vuex.vuejs.org), [Vite](https://vitejs.dev), [Volar](https://github.com/johnsoncodehk/volar), [p5](https://p5js.org), [ml5](https://ml5js.org), [Tailwind](https://tailwindcss.com), and [Teachable Machine](https://teachablemachine.withgoogle.com). The project is intended for my Artificial Intelligence coursework at [Diponegoro University](https://ft.undip.ac.id/en/site).

## 🚀 Quick start

Run the application in your local environment.

```bash
git clone https://github.com/ezralazuardy/image-classifier.git
cd image-classifier
cp .env.example .env
npm install
npm run dev
```

> [Node.js](https://nodejs.org) need to be installed in your environment. Internet connection is required to run the app.
