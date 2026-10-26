# Barisaler Pran (বরিশালের প্রাণ) - Frontend API Integration Guide

Welcome to the **Barisaler Pran Daily Newspaper Backend API Documentation**. This guide provides all necessary instructions, endpoints, request formats, query parameters, and integration examples for Frontend Developers (Next.js, React, Vue, or Mobile apps).

---

## 1. General Architecture & Base URL

- **Local Base URL:** `http://localhost:5001/api/v1`
- **Network Base URL:** `http://<YOUR_LOCAL_IP>:5001/api/v1`
- **Content-Type:** `application/json` (except file uploads which use `multipart/form-data`)

### Public vs Protected Rules:
1. **Public APIs (No Login Required):**
   - Full Homepage Layout Data (`GET /news/home`).
   - Reading all news articles, recent articles, breaking news, trending, slider, video gallery.
   - Searching news by keyword, category, topic, division, district, upazila, tags, date range.
   - Reading news comments and nested replies (`GET /comments/news/:newsId`).
   - Viewing categories, topics, writers, "Our Family" team members, and Bangladesh locations.
   - Subscribing to newsletter (`POST /newsletters/subscribe`).
   - Viewing advertisements by placement and incrementing ad clicks.
   - Fetching site header, footer, logo, and contact info (`GET /settings`).
2. **Protected APIs (Login Required):**
   - Writing a comment on a news article.
   - Replying to an existing comment.
   - Liking or disliking a comment.
   - All management/admin operations (publishing news, creating categories, managing writers/teams, managing ads, updating site settings).

### Authentication Header
Send the JWT access token in the `Authorization` header for protected routes:
```http
Authorization: <JWT_TOKEN>
```
*(Also accepts `Bearer <JWT_TOKEN>`)*

---

## 2. Homepage Aggregated Layout API (`GET /news/home`) - [Public]

To build the rich homepage shown in **Image 1** with optimal speed and zero waterfall network requests, the backend provides the single aggregated endpoint:

**Endpoint:** `GET /news/home`

### Returned Data Structure:
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Homepage layout data retrieved successfully",
  "data": {
    "breakingNews": [
      {
        "id": "...",
        "title": "ব্রেকিং নিউজ টাইটেল...",
        "slug": "breaking-news-slug",
        "publishedDate": "2026-10-25T11:00:00.000Z"
      }
    ],
    "leadNews": {
      "id": "...",
      "title": "প্রধান শীর্ষ সংবাদ...",
      "subtitle": "...",
      "slug": "main-lead-news",
      "summary": "...",
      "featuredImage": "https://...",
      "photoCredit": "ছবি: সংগৃহীত",
      "publishedDate": "...",
      "readingTime": "৩ মিনিট",
      "category": { "name": "জাতীয়", "slug": "জাতীয়" },
      "writer": { "name": "স্টাফ রিপোর্টার", "profileImage": "..." }
    },
    "subLeadNews": [
      { "id": "...", "title": "সাব-লিড সংবাদ ১...", "featuredImage": "...", "slug": "..." }
    ],
    "barishalDivision": {
      "leadArticle": { "id": "...", "title": "বরিশাল অঞ্চলের প্রধান সংবাদ...", "featuredImage": "..." },
      "sideArticles": [
        { "id": "...", "title": "বরিশাল সংবাদ ২...", "featuredImage": "..." }
      ]
    },
    "latestNews": [
      { "id": "...", "title": "সর্বশেষ সংবাদ...", "publishedDate": "...", "category": { ... } }
    ],
    "mostReadNews": [
      { "id": "...", "title": "সর্বাধিক পঠিত সংবাদ...", "viewsCount": 1540, "rank": 1 },
      { "id": "...", "title": "সর্বাধিক পঠিত সংবাদ ২...", "viewsCount": 980, "rank": 2 }
    ],
    "categoryBlocks": [
      {
        "category": { "id": "...", "name": "বাংলাদেশ", "slug": "bangladesh" },
        "leadArticle": { "id": "...", "title": "...", "featuredImage": "..." },
        "subArticles": [
          { "id": "...", "title": "...", "featuredImage": "..." }
        ]
      },
      {
        "category": { "id": "...", "name": "আন্তর্জাতিক", "slug": "international" },
        "leadArticle": { ... },
        "subArticles": [ ... ]
      },
      {
        "category": { "id": "...", "name": "খেলাধুলা", "slug": "sports" },
        "leadArticle": { ... },
        "subArticles": [ ... ]
      },
      {
        "category": { "id": "...", "name": "বিনোদন", "slug": "entertainment" },
        "leadArticle": { ... },
        "subArticles": [ ... ]
      }
    ],
    "videoNews": [
      {
        "id": "...",
        "title": "ভিডিও গ্যালারির সংবাদ...",
        "youtubeLink": "https://www.youtube.com/watch?v=ABCDE",
        "featuredImage": "..."
      }
    ],
    "sliderNews": [
      { "id": "...", "title": "স্লাইডার সংবাদ...", "featuredImage": "..." }
    ],
    "ads": {
      "HEADER_TOP": [{ "imageUrl": "...", "targetUrl": "..." }],
      "HOMEPAGE_MIDDLE": [{ "imageUrl": "...", "targetUrl": "..." }],
      "HOMEPAGE_BOTTOM": [{ "imageUrl": "...", "targetUrl": "..." }]
    },
    "siteSettings": {
      "siteName": "বরিশালের প্রাণ",
      "siteSlogan": "সত্যের সন্ধানে অবিচল",
      "officeAddress": "সিবি ভবন, সদর রোড, বরিশাল-৮২০০",
      "phone": "+৮৮০১৭১২-৩৪৫৬৭৮",
      "email": "contact@barisalerpran.com"
    }
  }
}
```

---

## 3. Single Article Details Page (`GET /news/slug/:slug` or `GET /news/:id`) - [Public]

Matches **Image 2** completely:
- Automatically tracks & increments `viewsCount` + 1.
- Calculates estimated `readingTime` (e.g. "৩ মিনিট").
- Returns **Previous & Next Article Navigation** (`navigation.prevNews`, `navigation.nextNews`).
- Returns **Related News** (4 articles from the same category).
- Returns **Right Sidebar Data** with `latestNews` and `mostReadNews` (ranked 1 to 5).

### Returned Data Structure:
```json
{
  "statusCode": 200,
  "success": true,
  "message": "News article details retrieved successfully",
  "data": {
    "id": "671baa104e89133481234570",
    "title": "রান্নার সরঞ্জাম ও পায়ুপথে লুকানো ছিল ৫ কোটি টাকার স্বর্ণ",
    "subtitle": "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে বিপুল পরিমাণ স্বর্ণ জব্দ",
    "slug": "রান্নার-সরঞ্জাম-ও-পায়ুপথে-লুকানো-ছিল-৫-কোটি-টাকার-স্বর্ণ",
    "content": "<h2>বিস্তারিত প্রতিবেদন</h2><p>হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে...</p>",
    "summary": "কাস্টমস গোয়েন্দা ও তদন্ত অধিদপ্তরের অভিযানে...",
    "featuredImage": "https://example.com/gold-seizure.jpg",
    "imageCaption": "যাত্রীদের ব্যাগ তল্লাশি করে এসব সোনা উদ্ধার করা হয়।",
    "photoCredit": "ছবি: সংগৃহীত / নিজস্ব প্রতিনিধি",
    "youtubeLink": "https://www.youtube.com/watch?v=ABCDE",
    "division": "ঢাকা",
    "district": "ঢাকা",
    "upazila": "বিমানবন্দর",
    "tags": ["স্বর্ণ উদ্ধার", "বিমানবন্দর", "শুল্ক গোয়েন্দা"],
    "publishedDate": "2026-10-25T06:47:00.000Z",
    "readingTime": "৩ মিনিট",
    "viewsCount": 1284,
    "sharesCount": 42,
    "category": { "id": "...", "name": "জাতীয়", "slug": "জাতীয়" },
    "topic": { "id": "...", "name": "অপরাধ", "slug": "crime" },
    "writer": {
      "id": "...",
      "name": "গোলাম মাওলা শাওন",
      "designationTitle": "জ্যেষ্ঠ অপরাধ প্রতিবেদক",
      "profileImage": "https://example.com/writer.jpg",
      "bio": "বরিশালের প্রাণ-এর জ্যেষ্ঠ অপরাধ প্রতিবেদক"
    },
    "guestWriterName": "",
    "guestWriterDesignation": "",
    "_count": { "comments": 3 },
    "navigation": {
      "prevNews": {
        "id": "...",
        "title": "বরিশালে সড়ক দুর্ঘটনায় আহত ৩",
        "slug": "বরিশালে-সড়ক-দুর্ঘটনায়-আহত-৩",
        "featuredImage": "..."
      },
      "nextNews": {
        "id": "...",
        "title": "আগামী কাল চালু হচ্ছে বরিশাল-ভোলা ফেরি সার্ভিস",
        "slug": "আগামী-কাল-চালু-হচ্ছে-বরিশাল-ভোলা-ফেরি-সার্ভিস",
        "featuredImage": "..."
      }
    },
    "relatedNews": [
      {
        "id": "...",
        "title": "সম্পর্কিত সংবাদ ১...",
        "slug": "...",
        "featuredImage": "...",
        "publishedDate": "..."
      }
    ],
    "sidebar": {
      "latestNews": [
        { "id": "...", "title": "সর্বশেষ সংবাদ ১...", "featuredImage": "..." }
      ],
      "mostReadNews": [
        { "id": "...", "title": "১ম সর্বাধিক পঠিত সংবাদ...", "rank": 1 },
        { "id": "...", "title": "২য় সর্বাধিক পঠিত সংবাদ...", "rank": 2 },
        { "id": "...", "title": "৩য় সর্বাধিক পঠিত সংবাদ...", "rank": 3 },
        { "id": "...", "title": "৪র্থ সর্বাধিক পঠিত সংবাদ...", "rank": 4 },
        { "id": "...", "title": "৫ম সর্বাধিক পঠিত সংবাদ...", "rank": 5 }
      ]
    }
  }
}
```

---

## 4. WYSIWYG Editor Content Rendering (React / Next.js)

```tsx
import DOMPurify from "isomorphic-dompurify";

export default function ArticleContent({ htmlContent }: { htmlContent: string }) {
  const cleanHtml = DOMPurify.sanitize(htmlContent);
  return (
    <article
      className="prose prose-lg max-w-none text-gray-800 leading-relaxed font-bangla"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
}
```

---

## 5. Comments, Replies & Like/Dislike APIs (`/comments`)

### 5.1 Read Comments (Public)
- **Endpoint:** `GET /comments/news/:newsId` *(or `:slug`)*
- **Header:** `Authorization: <TOKEN>` *(Optional: if user is logged in, `userReaction` will be "LIKE" | "DISLIKE" | null)*
- **Returns:** Top-level comments and nested replies with commenter avatar, name, and like/dislike counts.

### 5.2 Post a Comment (Protected: Login Required)
- **Endpoint:** `POST /comments`
- **Body:**
```json
{
  "newsId": "671baa104e89133481234570",
  "content": "খুবই প্রশংসনীয় উদ্যোগ! দ্রুত কাজ শেষ হোক।"
}
```

### 5.3 Reply to a Comment (Protected: Login Required)
- **Endpoint:** `POST /comments/:commentId/reply`
- **Body:**
```json
{
  "content": "আমিও আপনার সাথে একমত।"
}
```

### 5.4 React Like or Dislike (Protected: Login Required)
- **Endpoint:** `POST /comments/:commentId/react`
- **Body:**
```json
{
  "type": "LIKE" // or "DISLIKE"
}
```
*Tip: Clicking the same reaction again automatically toggles off / removes the reaction. Clicking the opposite reaction automatically flips it.*

---

## 6. Social Share Counter API

When a reader clicks Facebook, Twitter, WhatsApp, or Telegram share buttons:
- **Endpoint:** `POST /news/:id/share`
- **Response:** `{ "statusCode": 200, "data": { "id": "...", "sharesCount": 43 } }`

---

## 7. Newsletter Subscription API (`/newsletters`)

Powers the subscription box in **Image 1** ("প্রতিদিনের তাজা সংবাদের আপডেট পেতে সাবস্ক্রাইব করুন"):
- **Endpoint:** `POST /newsletters/subscribe`
- **Body:**
```json
{
  "email": "reader@example.com"
}
```

---

## 8. Site Settings & Dynamic Header/Footer (`/settings`)

Powers the Header, Logo, Contact, Social Media links, and Footer from **Image 1 & 2**:
- **Endpoint:** `GET /settings` [Public]
- **Returns:**
```json
{
  "siteName": "বরিশালের প্রাণ",
  "siteSlogan": "সত্যের সন্ধানে অবিচল",
  "logo": "https://example.com/logo.png",
  "footerLogo": "https://example.com/footer-logo.png",
  "favicon": "https://example.com/favicon.ico",
  "editorName": "সম্পাদক ও প্রকাশক",
  "officeAddress": "সিবি ভবন, সদর রোড, বরিশাল-৮২০০",
  "phone": "+৮৮০১৭১২-৩৪৫৬৭৮",
  "email": "contact@barisalerpran.com",
  "facebookUrl": "https://facebook.com/barisalerpran",
  "youtubeUrl": "https://youtube.com/@barisalerpran",
  "whatsappNumber": "+8801700000000"
}
```
- **Update Settings:** `PATCH /settings` [Protected: Admin/Editor]

---

## 9. Dynamic Advertisements & Campaign Management (`/ads`)

Powers the banner advertisements on Header, Homepage Middle, Homepage Bottom, Article Sidebar, and Article In-Body.

### 9.1 Ad Placements:
- `HEADER_TOP` (Top banner beside or above header)
- `HOMEPAGE_MIDDLE` (Between category blocks)
- `HOMEPAGE_BOTTOM` (Above footer)
- `ARTICLE_SIDEBAR` (Right sidebar beside single article content)
- `ARTICLE_IN_BODY` (Middle of article reading content)

### 9.2 Public Endpoints:
- **Get Active Ads by Placement:**
  `GET /ads?placement=HEADER_TOP`
- **Record Ad Impression (When banner enters viewport):**
  `POST /ads/:id/impression`
- **Record Ad Click (When visitor clicks the ad):**
  `POST /ads/:id/click`
  - Automatically increments `clicksCount` + 1 and returns `targetUrl` for immediate redirection.

### 9.3 Admin Panel Ad Management:
- **List All Ads (Active & Inactive for Admin view):**
  `GET /ads?isActive=all`
- **Get Single Ad Details:**
  `GET /ads/:id`
- **Create New Advertisement:**
  `POST /ads` *(Requires Permission: `ad.manage`)*
  ```json
  {
    "title": "Walton Smart Fridge Eid Offer",
    "placement": "HEADER_TOP",
    "imageUrl": "https://example.com/banner.jpg",
    "targetUrl": "https://waltonbd.com/offer",
    "startDate": "2026-10-25T00:00:00.000Z",
    "endDate": "2026-11-25T23:59:59.000Z",
    "isActive": true
  }
  ```
- **Update Advertisement:**
  `PATCH /ads/:id` *(Requires Permission: `ad.manage`)*
- **Delete Advertisement:**
  `DELETE /ads/:id` *(Strictly Super Admin ONLY)*

---

## 10. Bangladesh Locations Dropdowns (`/locations`)

- `GET /locations/divisions` - All 8 divisions
- `GET /locations/districts?division=Barishal` - Districts of selected division
- `GET /locations/upazilas?district=Barishal` - Upazilas of selected district
- `GET /locations/hierarchy` - Full nested tree for client-side instant caching

---

## 11. News Authoring, Rich Editor & Draft Lifecycle (`/news`)

Journalists and reporters can write news articles, save them as drafts (`DRAFT`), preview them, and editors/admins can publish them live (`PUBLISHED`) or unpublish back to draft at any time.

### 11.1 Create News Article (Draft or Live)
- **Endpoint:** `POST /news`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `news.create`
- **Request Body:**
```json
{
  "title": "বরিশালে শীতের আগেই জমে উঠেছে লেপ-তোষকের বাজার",
  "subtitle": "ব্যস্ত সময় পার করছেন স্থানীয় কারিগর ও ব্যবসায়ীরা",
  "categoryId": "671baa104e89133481234501",
  "topicId": "671baa104e89133481234510",
  "writerId": "671baa104e89133481234520",
  "content": "<h2>শীতের আমেজ শুরু</h2><p>কার্তিক মাসের মাঝামাঝি সময়ে বরিশালে শীতের আমেজ শুরু হয়েছে...</p>",
  "summary": "শীত শুরুর আগেই বরিশালের বাজারগুলোতে লেপ-তোষক তৈরির হিড়িক পড়েছে...",
  "featuredImage": "https://example.com/lep-toshok.jpg",
  "imageCaption": "তুলা ধুনা ও সেলাইয়ের কাজে ব্যস্ত কারিগররা।",
  "photoCredit": "ছবি: সংগৃহীত",
  "youtubeLink": "https://youtube.com/watch?v=sample",
  "division": "বরিশাল",
  "district": "বরিশাল",
  "upazila": "বরিশাল সদর",
  "tags": ["বরিশাল", "শীত", "লেপ-তোষক"],
  "publishStatus": "DRAFT", // Or "PUBLISHED" to go live immediately
  "isLead": false,
  "isSubLead": false,
  "isBreaking": false,
  "isFeatured": false,
  "isTrending": false,
  "isSlider": false
}
```

> **Note on Rich Text Editor (WYSIWYG):** Frontend can use Quill, TinyMCE, TipTap, or CKEditor. Pass the raw HTML in the `content` field. The backend preserves headings, images, blockquotes, embeds, and formatting verbatim.

### 11.2 View Drafts (`GET /news/drafts`)
- **Endpoint:** `GET /news/drafts?page=1&limit=10&searchTerm=শীত`
- **Authorization:** `Authorization: <JWT_TOKEN>`
- **Behavior:**
  - `Super_Admin`, `Admin`, `Editor`: Can see **ALL drafts** submitted across all journalists and reporters.
  - `Reporter`, `Staff`: Sees only their **OWN drafts** (`authorId = user.id`).

### 11.3 1-Click Publish Draft (`PATCH /news/:id/publish`)
- **Endpoint:** `PATCH /news/:id/publish`
- **Authorization:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `news.publish`
- **Behavior:** Automatically updates `publishStatus = "PUBLISHED"`, sets `publishedDate = new Date()`, and makes the article immediately visible across homepage, category pages, search, and RSS.

### 11.4 1-Click Unpublish to Draft (`PATCH /news/:id/unpublish`)
- **Endpoint:** `PATCH /news/:id/unpublish`
- **Authorization:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `news.publish`
- **Behavior:** Immediately pulls the article offline back to `DRAFT` status for corrections or review.

### 11.5 Update News Article (`PATCH /news/:id`)
Allows editors, reporters, or admins to edit any article field (title, subtitle, content HTML, tags, writer, categories, lead/sublead flags, etc.):
- **Endpoint:** `PATCH /news/:id`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `news.edit`
- **Request Body:** Partial update (send only the fields you wish to change)
```json
{
  "title": "বরিশালে শীতের আগে লেপ-তোষকের বাজারে ব্যস্ততা তুঙ্গে",
  "content": "<h2>নতুন তথ্য সংযুক্ত</h2><p>কারিগররা প্রতিদিন সকাল থেকে রাত পর্যন্ত কাজ করছেন...</p>",
  "isBreaking": true,
  "isTrending": true
}
```

### 11.6 1-Click Hide News from Public Site (`PATCH /news/:id/hide`)
Allows editors/admins to instantly take an article down from the public website (homepage, category, search, and direct detail views) without deleting it:
- **Endpoint:** `PATCH /news/:id/hide`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `news.publish`
- **Behavior:** Sets `isHidden = true`. Immediately conceals the article from public readers. Public visits to this article return `404 Not Found`. Logged-in editorial staff can still see it in the admin panel and preview it.

### 11.7 1-Click Unhide News (`PATCH /news/:id/unhide`)
Restores a hidden news article back to the public live website:
- **Endpoint:** `PATCH /news/:id/unhide`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `news.publish`
- **Behavior:** Sets `isHidden = false`. Article immediately re-appears on the live site.

### 11.8 Filter News by Hidden Status (`GET /news?isHidden=...`)
Editorial staff can list and manage hidden articles:
- `GET /news?isHidden=true` - View all currently hidden articles.
- `GET /news?isHidden=false` - View active unhidden articles.
- `GET /news?isHidden=all` - View both hidden and unhidden articles together.

### 11.9 Delete News Article (`DELETE /news/:id`)
- **Endpoint:** `DELETE /news/:id`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Security Rule:** **Strictly Super Admin ONLY!**
- Any editor, admin, or reporter trying to delete will receive:
```json
{
  "statusCode": 403,
  "success": false,
  "message": "Deletion prohibited! Only Super Admin has authority to delete records from the system."
}
```

---

## 12. User, Role & Granular Permission Management (`/users/directory`)

Allows administrators to create staff members, configure system roles, and assign fine-grained customized permissions.

### 12.1 System Roles:
1. `Super_Admin` - Full uncontrolled authority over all modules and exclusive deletion rights.
2. `Admin` - Full management rights (cannot perform deletions).
3. `Editor` - Editorial rights (create, edit, publish news, manage categories, topics, writers, moderate comments).
4. `Reporter` - Field journalist rights (create and edit news drafts).
5. `Staff` - News authoring and editorial support.
6. `Moderator` - Comment moderation.
7. `Customer` - Public registered reader (can comment, react, bookmark).

### 12.2 Available Granular Permission Keys:
| Permission Key | Description |
| :--- | :--- |
| `news.create` | Write new news articles and save drafts |
| `news.edit` | Edit existing news articles |
| `news.publish` | 1-Click publish drafts live or unpublish back to draft |
| `category.manage` | Create, reorder, and update news categories |
| `topic.manage` | Create and edit sub-topics under categories |
| `writer.manage` | Manage reporters, columnists, and editorial team designations |
| `ad.manage` | Create, target, and update advertisements |
| `setting.manage` | Manage site config, logo, header/footer, and contact info |
| `user.manage` | Create staff members and configure roles/permissions |
| `comment.moderate` | Moderate and manage reader comments |

*(Note: Deletion is deliberately excluded from permissions because deletion is strictly reserved for `Super_Admin`)*

### 12.3 Get Permissions Directory (`GET /users/directory/permissions-list`)
Returns all valid permission keys and default role permission presets for populating admin panel checkboxes:
- **Endpoint:** `GET /users/directory/permissions-list`
- **Headers:** `Authorization: <JWT_TOKEN>`

### 12.4 Create Staff Member with Role & Permissions (`POST /users/directory`)
- **Endpoint:** `POST /users/directory`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `user.manage`
- **Request Body:**
```json
{
  "fullName": "আহমেদ রফিক",
  "email": "ahmed.rafiq@barisalerpran.com",
  "password": "SecurePassword123",
  "phone": "01711223344",
  "role": "Reporter",
  "designation": "জ্যেষ্ঠ বরিশাল প্রতিনিধি",
  "permissions": [
    "news.create",
    "news.edit"
  ]
}
```
*Note: If `permissions` array is omitted, system automatically grants default permissions matching the selected role.*

### 12.5 List & Filter Users (`GET /users/directory`)
- **Endpoint:** `GET /users/directory?role=Reporter&status=ACTIVE&searchTerm=রফিক&page=1&limit=20`

### 12.6 Update User Access & Permissions (`PATCH /users/directory/:id/access`)
- **Endpoint:** `PATCH /users/directory/:id/access`
- **Headers:** `Authorization: <JWT_TOKEN>`
- **Required Permission:** `user.manage`
- **Request Body:**
```json
{
  "role": "Editor",
  "designation": "সহকারী বার্তা সম্পাদক",
  "permissions": [
    "news.create",
    "news.edit",
    "news.publish",
    "category.manage",
    "topic.manage"
  ]
}
```

### 12.7 Update User Status (`PATCH /users/directory/:id/status`)
- **Endpoint:** `PATCH /users/directory/:id/status`
- **Body:** `{ "status": "ACTIVE" }` *(or "SUSPENDED", "BLOCKED")*

### 12.8 Delete User (`DELETE /users/directory/:id`)
- **Endpoint:** `DELETE /users/directory/:id`
- **Restriction:** **Strictly Super Admin ONLY!**

---

## 13. System-Wide Strict Deletion Rule

> [!IMPORTANT]
> **Strict Security Constraint:**
> *"যেকোনো পারমিশনই হোক, সুপার অ্যাডমিন ছাড়া অন্য কেউ কোনো কিছু ডিলিট করতে পারবে না।"*
> 
> Across the entire Barisaler Pran application:
> - **Only `UserRole.Super_Admin`** possesses permission to execute `DELETE` operations on:
>   - News Articles (`DELETE /news/:id`)
>   - Categories (`DELETE /categories/:id`)
>   - Topics (`DELETE /topics/:id`)
>   - Writers (`DELETE /writers/:id`)
>   - Team Designations (`DELETE /teams/:id`)
>   - Advertisements (`DELETE /ads/:id`)
>   - System Staff / Users (`DELETE /users/directory/:id`)
>   - Uploaded Media Files (`DELETE /files/single-delete`)
>   - Reader Comments moderation (`DELETE /comments/:id`)
> 
> Any deletion request triggered by any account other than `Super_Admin` will return:
> ```json
> {
>   "statusCode": 403,
>   "success": false,
>   "message": "Deletion prohibited! Only Super Admin has authority to delete records from the system."
> }
> ```
