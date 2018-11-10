# Angular Universal Starter

앵귤러 공식 프로젝트 [Angular Universal starter kit](https://github.com/angular/universal-starter)를 기반으로 아래 내용을 반영한 스타터 키트 프로젝트입니다.

- 최신 앵귤러 버전 - Angular 7
- 최신 의존성 패키지 - RxJS 6, TypeScript 3 등
- SCSS 사용
- HTML 언어 ko로 설정
- 에디터 설정 사용 - .editorconfig 파일 추가
- npm 사용 - yarn 삭제
- SEO를 위한 동적 페이지 타이틀, 메타 태그, Open Graph 태그 지원 - [ngx-meta](https://github.com/fulls1z3/ngx-meta)
- [ ] browserlist
- [ ] core/shared module
- [ ] layout module
- [ ] api
- [ ] api/auth

## 최신 패키지 설치
최신 패키지를 설치하고 해당 버전을 package.json에 동일하게 표시하기 위해 [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)를 사용했습니다.
- `npm install -g npm-check-updates`
- `ncu`

## 프로젝트 활용법
1. 프로젝트를 fork 하거나 다운로드하여 새 프로젝트를 생성한다.
1. 프로젝트 이름을 변경한다.
  1. package.json, angular.json 두 파일에서 'ng-universal-demo'를 찾기/바꾸기 기능을 이용해 새 프로젝트 이름으로 변경한다.
1. SEO를 위한 내용을 입력한다. (+ fb:app_id)

---
이하 원본 프로젝트 내용

A minimal Angular starter for Universal JavaScript using the [Angular CLI](https://github.com/angular/angular-cli)
If you're looking for the Angular Universal repo go to [**angular/universal**](https://github.com/angular/universal)  

## Getting Started

This demo is built following the [Angular-CLI Wiki guide](https://github.com/angular/angular-cli/wiki/stories-universal-rendering)

We're utilizing packages from the [Angular Universal @nguniversal](https://github.com/angular/universal) repo, such as [ng-module-map-ngfactory-loader](https://github.com/angular/universal/modules/module-map-ngfactory-loader) to enable Lazy Loading.

---

### Build Time Prerendering Vs. Server Side Rendering(ssr)
This repo demonstrates the use of 2 different forms of Server Side Rendering.

**Prerender** 
* Happens at build time
* Renders your application and replaces the dist index.html with a version rendered at the route `/`.

**Server-Side Rendering(ssr)**
* Happens at runtime
* Uses `ngExpressEngine` to render your application on the fly at the requested url.

---

### Installation
* `npm install` or `yarn`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)
**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`


## Universal "Gotchas"
Moved to [/angular/universal/blob/master/docs/gotchas.md](https://github.com/angular/universal/blob/master/docs/gotchas.md)

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
