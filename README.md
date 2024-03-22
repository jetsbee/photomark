This is a simple unsplash clone web app with [Unsplash Image API | Free HD Photo API](https://unsplash.com/developers).

- 프로젝트 구조

```
app/(components) <- 화면 구성 UI, 관련 로직(hooks)
app/(mocks) <- 서버 API 목업 (msw 활용)
app/(pages) <- 페이지 UI, 관련 로직(hooks)
app/(providers) <- React providers
app/(states) <- 웹앱의 서버 상태/로직, 클라이언트 상태/로직

.env.example <- 환경변수 예시(실행, 빌드 시 참고하여 .env.local 만들어서 사용해야함)
```

- Prerequisites

    - yarn (package manager)

- 실행방법

```sh
# 의존성 설치
yarn install

# development 모드 실행
yarn dev

# production 모드 실행
yarn build
yarn start
```

- 빌드 방법

```sh
yarn build
```

- (예정)테스트 방법

    - Visual, Interaction, Accessibility, Coverage 등
    - Storybook, Testing-library, Istanbul, Playwright 등 활용

- 환경변수
    | Variable                            | Description                                            |
    | ----------------------------------- | ------------------------------------------------------ |
    | NEXT_PUBLIC_API_MOCKING             | 네트워크 목업 활성화 여부 (값: enabled or "")                 |
    | NEXT_PUBLIC_UNSPLASH_ACCESS_KEY     | Unsplash Image API Access key (값: 1234 or ${REAL_KEY}) |

    * **네트워크 목업 활성화 시, NEXT_PUBLIC_UNSPLASH_ACCESS_KEY 값은 1234 로 셋팅해야함**

- 검색 페이지 (/)

    - 기본 20개 이미지 표현
    - 검색 시 20개씩 이미지 표현 (무한스크롤 방식)
    - 이미지 클릭 시 세부 정보 표현 (모달 방식)
    - 하트 클릭 시 북마크에 저장

- 북마크 페이지 (/bookmarks)

    - 북마크한 이미지 리스트 표현

- 활용한 Server APIs

    - 공통
    ```
    HTTP request header

    Authorization: Client-ID YOUR_ACCESS_KEY
    ```
    
    - 기본 Get photos (초기 메인 화면용)
    ```
    GET /photos/random

    QueryParam
        count	The number of photos to return. (Default: 1; max: 30)
    ```

    - Search photos (검색용)
    ```
    GET /search/photos
    
    QueryParam
        query	Search terms.
        page	Page number to retrieve. (Optional; default: 1)
        per_page	Number of items per page. (Optional; default: 10)
    ```

    - Photo by id (이미지 세부정보용)
    ```
    GET /photos/:id
    
    id	The photo’s ID. Required.
    ```
