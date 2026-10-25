export interface Division {
  id: string;
  name: string;
  bnName: string;
}

export interface District {
  id: string;
  divisionId: string;
  name: string;
  bnName: string;
}

export interface Upazila {
  id: string;
  districtId: string;
  name: string;
  bnName: string;
}

// 8 Divisions of Bangladesh
export const DIVISIONS: Division[] = [
  { id: "chattagram", name: "Chattagram", bnName: "চট্টগ্রাম" },
  { id: "rajshahi", name: "Rajshahi", bnName: "রাজশাহী" },
  { id: "khulna", name: "Khulna", bnName: "খুলনা" },
  { id: "barisal", name: "Barisal", bnName: "বরিশাল" },
  { id: "sylhet", name: "Sylhet", bnName: "সিলেট" },
  { id: "dhaka", name: "Dhaka", bnName: "ঢাকা" },
  { id: "rangpur", name: "Rangpur", bnName: "রংপুর" },
  { id: "mymensingh", name: "Mymensingh", bnName: "ময়মনসিংহ" },
];

// All 64 Districts of Bangladesh
export const DISTRICTS: District[] = [
  // Dhaka Division (13)
  { id: "dhaka", divisionId: "dhaka", name: "Dhaka", bnName: "ঢাকা" },
  { id: "gazipur", divisionId: "dhaka", name: "Gazipur", bnName: "গাজীপুর" },
  { id: "narayanganj", divisionId: "dhaka", name: "Narayanganj", bnName: "নারায়ণগঞ্জ" },
  { id: "tangail", divisionId: "dhaka", name: "Tangail", bnName: "টাঙ্গাইল" },
  { id: "kishoreganj", divisionId: "dhaka", name: "Kishoreganj", bnName: "কিশোরগঞ্জ" },
  { id: "manikganj", divisionId: "dhaka", name: "Manikganj", bnName: "মানিকগঞ্জ" },
  { id: "munshiganj", divisionId: "dhaka", name: "Munshiganj", bnName: "মুন্সীগঞ্জ" },
  { id: "narsingdi", divisionId: "dhaka", name: "Narsingdi", bnName: "নরসিংদী" },
  { id: "faridpur", divisionId: "dhaka", name: "Faridpur", bnName: "ফরিদপুর" },
  { id: "gopalganj", divisionId: "dhaka", name: "Gopalganj", bnName: "গোপালগঞ্জ" },
  { id: "madaripur", divisionId: "dhaka", name: "Madaripur", bnName: "মাদারীপুর" },
  { id: "rajbari", divisionId: "dhaka", name: "Rajbari", bnName: "রাজবাড়ী" },
  { id: "shariatpur", divisionId: "dhaka", name: "Shariatpur", bnName: "শরীয়তপুর" },

  // Chattagram Division (11)
  { id: "chattagram-dist", divisionId: "chattagram", name: "Chattagram", bnName: "চট্টগ্রাম" },
  { id: "coxs-bazar", divisionId: "chattagram", name: "Cox's Bazar", bnName: "কক্সবাজার" },
  { id: "cumilla", divisionId: "chattagram", name: "Cumilla", bnName: "কুমিল্লা" },
  { id: "brahmanbaria", divisionId: "chattagram", name: "Brahmanbaria", bnName: "ব্রাহ্মণবাড়িয়া" },
  { id: "chandpur", divisionId: "chattagram", name: "Chandpur", bnName: "চাঁদপুর" },
  { id: "feni", divisionId: "chattagram", name: "Feni", bnName: "ফেনী" },
  { id: "noakhali", divisionId: "chattagram", name: "Noakhali", bnName: "নোয়াখালী" },
  { id: "lakshmipur", divisionId: "chattagram", name: "Lakshmipur", bnName: "লক্ষ্মীপুর" },
  { id: "khagrachhari", divisionId: "chattagram", name: "Khagrachhari", bnName: "খাগড়াছড়ি" },
  { id: "rangamati", divisionId: "chattagram", name: "Rangamati", bnName: "রাঙ্গামাটি" },
  { id: "bandarban", divisionId: "chattagram", name: "Bandarban", bnName: "বান্দরবান" },

  // Rajshahi Division (8)
  { id: "rajshahi-dist", divisionId: "rajshahi", name: "Rajshahi", bnName: "রাজশাহী" },
  { id: "bogura", divisionId: "rajshahi", name: "Bogura", bnName: "বগুড়া" },
  { id: "pabna", divisionId: "rajshahi", name: "Pabna", bnName: "পাবনা" },
  { id: "sirajganj", divisionId: "rajshahi", name: "Sirajganj", bnName: "সিরাজগঞ্জ" },
  { id: "naogaon", divisionId: "rajshahi", name: "Naogaon", bnName: "নওগাঁ" },
  { id: "natore", divisionId: "rajshahi", name: "Natore", bnName: "নাটোর" },
  { id: "chapainawabganj", divisionId: "rajshahi", name: "Chapainawabganj", bnName: "চাঁপাইনবাবগঞ্জ" },
  { id: "joypurhat", divisionId: "rajshahi", name: "Joypurhat", bnName: "জয়পুরহাট" },

  // Khulna Division (10)
  { id: "khulna-dist", divisionId: "khulna", name: "Khulna", bnName: "খুলনা" },
  { id: "jashore", divisionId: "khulna", name: "Jashore", bnName: "যশোর" },
  { id: "satkhira", divisionId: "khulna", name: "Satkhira", bnName: "সাতক্ষীরা" },
  { id: "bagerhat", divisionId: "khulna", name: "Bagerhat", bnName: "বাগেরহাট" },
  { id: "kushtia", divisionId: "khulna", name: "Kushtia", bnName: "কুষ্টিয়া" },
  { id: "jhenaidah", divisionId: "khulna", name: "Jhenaidah", bnName: "ঝিনাইদহ" },
  { id: "chuadanga", divisionId: "khulna", name: "Chuadanga", bnName: "চুয়াডাঙ্গা" },
  { id: "meherpur", divisionId: "khulna", name: "Meherpur", bnName: "মেহেরপুর" },
  { id: "magura", divisionId: "khulna", name: "Magura", bnName: "মাগুরা" },
  { id: "narail", divisionId: "khulna", name: "Narail", bnName: "নড়াইল" },

  // Barisal Division (6)
  { id: "barisal-dist", divisionId: "barisal", name: "Barisal", bnName: "বরিশাল" },
  { id: "bhola", divisionId: "barisal", name: "Bhola", bnName: "ভোলা" },
  { id: "patuakhali", divisionId: "barisal", name: "Patuakhali", bnName: "পটুয়াখালী" },
  { id: "pirojpur", divisionId: "barisal", name: "Pirojpur", bnName: "পিরোজপুর" },
  { id: "barguna", divisionId: "barisal", name: "Barguna", bnName: "বরগুনা" },
  { id: "jhalokathi", divisionId: "barisal", name: "Jhalokathi", bnName: "ঝালকাঠি" },

  // Sylhet Division (4)
  { id: "sylhet-dist", divisionId: "sylhet", name: "Sylhet", bnName: "সিলেট" },
  { id: "moulvibazar", divisionId: "sylhet", name: "Moulvibazar", bnName: "মৌলভীবাজার" },
  { id: "habiganj", divisionId: "sylhet", name: "Habiganj", bnName: "হবিগঞ্জ" },
  { id: "sunamganj", divisionId: "sylhet", name: "Sunamganj", bnName: "সুনামগঞ্জ" },

  // Rangpur Division (8)
  { id: "rangpur-dist", divisionId: "rangpur", name: "Rangpur", bnName: "রংপুর" },
  { id: "dinajpur", divisionId: "rangpur", name: "Dinajpur", bnName: "দিনাজপুর" },
  { id: "gaibandha", divisionId: "rangpur", name: "Gaibandha", bnName: "গাইবান্ধা" },
  { id: "kurigram", divisionId: "rangpur", name: "Kurigram", bnName: "কুড়িগ্রাম" },
  { id: "lalmonirhat", divisionId: "rangpur", name: "Lalmonirhat", bnName: "লালমনিরহাট" },
  { id: "nilphamari", divisionId: "rangpur", name: "Nilphamari", bnName: "নীলফামারী" },
  { id: "panchagarh", divisionId: "rangpur", name: "Panchagarh", bnName: "পঞ্চগড়" },
  { id: "thakurgaon", divisionId: "rangpur", name: "Thakurgaon", bnName: "ঠাকুরগাঁও" },

  // Mymensingh Division (4)
  { id: "mymensingh-dist", divisionId: "mymensingh", name: "Mymensingh", bnName: "ময়মনসিংহ" },
  { id: "jamalpur", divisionId: "mymensingh", name: "Jamalpur", bnName: "জামালপুর" },
  { id: "netrokona", divisionId: "mymensingh", name: "Netrokona", bnName: "নেত্রকোণা" },
  { id: "sherpur", divisionId: "mymensingh", name: "Sherpur", bnName: "শেরপুর" },
];

// Upazilas of Bangladesh mapped by districtId
export const UPAZILAS: Upazila[] = [
  // Dhaka District
  { id: "dhanmondi", districtId: "dhaka", name: "Dhanmondi", bnName: "ধানমন্ডি" },
  { id: "gulshan", districtId: "dhaka", name: "Gulshan", bnName: "গুলশান" },
  { id: "mirpur", districtId: "dhaka", name: "Mirpur", bnName: "মিরপুর" },
  { id: "mohammadpur", districtId: "dhaka", name: "Mohammadpur", bnName: "মোহাম্মদপুর" },
  { id: "motijheel", districtId: "dhaka", name: "Motijheel", bnName: "মতিঝিল" },
  { id: "uttara", districtId: "dhaka", name: "Uttara", bnName: "উত্তরা" },
  { id: "ramna", districtId: "dhaka", name: "Ramna", bnName: "রমনা" },
  { id: "savar", districtId: "dhaka", name: "Savar", bnName: "সাভার" },
  { id: "dhamrai", districtId: "dhaka", name: "Dhamrai", bnName: "ধামরাই" },
  { id: "keraniganj", districtId: "dhaka", name: "Keraniganj", bnName: "কেরানীগঞ্জ" },
  { id: "dohar", districtId: "dhaka", name: "Dohar", bnName: "দোহার" },
  { id: "nawabganj-dhk", districtId: "dhaka", name: "Nawabganj", bnName: "নবাবগঞ্জ" },

  // Gazipur District
  { id: "gazipur-sadar", districtId: "gazipur", name: "Gazipur Sadar", bnName: "গাজীপুর সদর" },
  { id: "kaliakair", districtId: "gazipur", name: "Kaliakair", bnName: "কালিয়াকৈর" },
  { id: "kaliganj-gzp", districtId: "gazipur", name: "Kaliganj", bnName: "কালীগঞ্জ" },
  { id: "kapasia", districtId: "gazipur", name: "Kapasia", bnName: "কাপাসিয়া" },
  { id: "sreepur-gzp", districtId: "gazipur", name: "Sreepur", bnName: "শ্রীপুর" },
  { id: "tongi", districtId: "gazipur", name: "Tongi", bnName: "টঙ্গী" },

  // Narayanganj District
  { id: "narayanganj-sadar", districtId: "narayanganj", name: "Narayanganj Sadar", bnName: "নারায়ণগঞ্জ সদর" },
  { id: "bandar", districtId: "narayanganj", name: "Bandar", bnName: "বন্দর" },
  { id: "araihazar", districtId: "narayanganj", name: "Araihazar", bnName: "আড়াইহাজার" },
  { id: "rupganj", districtId: "narayanganj", name: "Rupganj", bnName: "রূপগঞ্জ" },
  { id: "sonargaon", districtId: "narayanganj", name: "Sonargaon", bnName: "সোনারগাঁও" },

  // Tangail District
  { id: "tangail-sadar", districtId: "tangail", name: "Tangail Sadar", bnName: "টাঙ্গাইল সদর" },
  { id: "gopalpur", districtId: "tangail", name: "Gopalpur", bnName: "গোপালপুর" },
  { id: "basail", districtId: "tangail", name: "Basail", bnName: "বাসাইল" },
  { id: "bhuapur", districtId: "tangail", name: "Bhuapur", bnName: "ভূঞাপুর" },
  { id: "delduar", districtId: "tangail", name: "Delduar", bnName: "দেলদুয়ার" },
  { id: "ghatail", districtId: "tangail", name: "Ghatail", bnName: "ঘাটাইল" },
  { id: "kalihati", districtId: "tangail", name: "Kalihati", bnName: "কালিহাতী" },
  { id: "madhupur", districtId: "tangail", name: "Madhupur", bnName: "মধুপুর" },
  { id: "mirzapur", districtId: "tangail", name: "Mirzapur", bnName: "মির্জাপুর" },
  { id: "sakhipur", districtId: "tangail", name: "Sakhipur", bnName: "সখিপুর" },

  // Kishoreganj District
  { id: "kishoreganj-sadar", districtId: "kishoreganj", name: "Kishoreganj Sadar", bnName: "কিশোরগঞ্জ সদর" },
  { id: "bajitpur", districtId: "kishoreganj", name: "Bajitpur", bnName: "বাজিতপুর" },
  { id: "bhairab", districtId: "kishoreganj", name: "Bhairab", bnName: "ভৈরব" },
  { id: "hossainpur", districtId: "kishoreganj", name: "Hossainpur", bnName: "হোসেনপুর" },
  { id: "itna", districtId: "kishoreganj", name: "Itna", bnName: "ইটনা" },
  { id: "karimganj", districtId: "kishoreganj", name: "Karimganj", bnName: "করিমগঞ্জ" },
  { id: "katiadi", districtId: "kishoreganj", name: "Katiadi", bnName: "কটিয়াদী" },
  { id: "mithamain", districtId: "kishoreganj", name: "Mithamain", bnName: "মিঠামইন" },
  { id: "nikli", districtId: "kishoreganj", name: "Nikli", bnName: "নিকলী" },
  { id: "pakundia", districtId: "kishoreganj", name: "Pakundia", bnName: "পাকুন্দিয়া" },

  // Manikganj District
  { id: "manikganj-sadar", districtId: "manikganj", name: "Manikganj Sadar", bnName: "মানিকগঞ্জ সদর" },
  { id: "singair", districtId: "manikganj", name: "Singair", bnName: "সিংগাইর" },
  { id: "shibalaya", districtId: "manikganj", name: "Shibalaya", bnName: "শিবালয়" },
  { id: "saturia", districtId: "manikganj", name: "Saturia", bnName: "সাটুরিয়া" },
  { id: "harirampur", districtId: "manikganj", name: "Harirampur", bnName: "হরিরামপুর" },

  // Munshiganj District
  { id: "munshiganj-sadar", districtId: "munshiganj", name: "Munshiganj Sadar", bnName: "মুন্সীগঞ্জ সদর" },
  { id: "tongibari", districtId: "munshiganj", name: "Tongibari", bnName: "টংগিবাড়ী" },
  { id: "serajdikhan", districtId: "munshiganj", name: "Serajdikhan", bnName: "সিরাজদিখান" },
  { id: "louhajang", districtId: "munshiganj", name: "Louhajang", bnName: "লৌহজং" },
  { id: "gazaria", districtId: "munshiganj", name: "Gazaria", bnName: "গজারিয়া" },
  { id: "sreenagar", districtId: "munshiganj", name: "Sreenagar", bnName: "শ্রীনগর" },

  // Narsingdi District
  { id: "narsingdi-sadar", districtId: "narsingdi", name: "Narsingdi Sadar", bnName: "নরসিংদী সদর" },
  { id: "belabo", districtId: "narsingdi", name: "Belabo", bnName: "বেলাবো" },
  { id: "monohardi", districtId: "narsingdi", name: "Monohardi", bnName: "মনোহরদী" },
  { id: "palash", districtId: "narsingdi", name: "Palash", bnName: "পলাশ" },
  { id: "raipura", districtId: "narsingdi", name: "Raipura", bnName: "রায়পুরা" },
  { id: "shibpur", districtId: "narsingdi", name: "Shibpur", bnName: "শিবপুর" },

  // Faridpur District
  { id: "faridpur-sadar", districtId: "faridpur", name: "Faridpur Sadar", bnName: "ফরিদপুর সদর" },
  { id: "boalmari", districtId: "faridpur", name: "Boalmari", bnName: "বোয়ালমারী" },
  { id: "bhanga", districtId: "faridpur", name: "Bhanga", bnName: "ভাঙ্গা" },
  { id: "madhukhali", districtId: "faridpur", name: "Madhukhali", bnName: "মধুখালী" },
  { id: "nagarkanda", districtId: "faridpur", name: "Nagarkanda", bnName: "নগরকান্দা" },

  // Gopalganj District
  { id: "gopalganj-sadar", districtId: "gopalganj", name: "Gopalganj Sadar", bnName: "গোপালগঞ্জ সদর" },
  { id: "kashiani", districtId: "gopalganj", name: "Kashiani", bnName: "কাশিয়ানী" },
  { id: "kotalipara", districtId: "gopalganj", name: "Kotalipara", bnName: "কোটালীপাড়া" },
  { id: "muksudpur", districtId: "gopalganj", name: "Muksudpur", bnName: "মুকসুদপুর" },
  { id: "tungipara", districtId: "gopalganj", name: "Tungipara", bnName: "টুঙ্গিপাড়া" },

  // Madaripur District
  { id: "madaripur-sadar", districtId: "madaripur", name: "Madaripur Sadar", bnName: "মাদারীপুর সদর" },
  { id: "shibchar", districtId: "madaripur", name: "Shibchar", bnName: "শিবচর" },
  { id: "kalkini", districtId: "madaripur", name: "Kalkini", bnName: "কালকিনি" },
  { id: "rajoir", districtId: "madaripur", name: "Rajoir", bnName: "রাজৈর" },

  // Rajbari District
  { id: "rajbari-sadar", districtId: "rajbari", name: "Rajbari Sadar", bnName: "রাজবাড়ী সদর" },
  { id: "goalanda", districtId: "rajbari", name: "Goalanda", bnName: "গোয়ালন্দ" },
  { id: "pangsha", districtId: "rajbari", name: "Pangsha", bnName: "পাংশা" },
  { id: "baliakandi", districtId: "rajbari", name: "Baliakandi", bnName: "বালিয়াকান্দি" },

  // Shariatpur District
  { id: "shariatpur-sadar", districtId: "shariatpur", name: "Shariatpur Sadar", bnName: "শরীয়তপুর সদর" },
  { id: "damudya", districtId: "shariatpur", name: "Damudya", bnName: "ডামুড্যা" },
  { id: "naria", districtId: "shariatpur", name: "Naria", bnName: "নড়িয়া" },
  { id: "jajira", districtId: "shariatpur", name: "Jajira", bnName: "জাজিরা" },
  { id: "bhedarganj", districtId: "shariatpur", name: "Bhedarganj", bnName: "ভেদরগঞ্জ" },

  // Chattagram District
  { id: "kotwali-ctg", districtId: "chattagram-dist", name: "Kotwali", bnName: "কোতোয়ালী" },
  { id: "panchlaish", districtId: "chattagram-dist", name: "Panchlaish", bnName: "পাঁচলাইশ" },
  { id: "pahartali", districtId: "chattagram-dist", name: "Pahartali", bnName: "পাহাড়তলী" },
  { id: "halishahar", districtId: "chattagram-dist", name: "Halishahar", bnName: "হালিশহর" },
  { id: "patenga", districtId: "chattagram-dist", name: "Patenga", bnName: "পতেঙ্গা" },
  { id: "hathazari", districtId: "chattagram-dist", name: "Hathazari", bnName: "হাটহাজারী" },
  { id: "raozan", districtId: "chattagram-dist", name: "Raozan", bnName: "রাউজান" },
  { id: "rangunia", districtId: "chattagram-dist", name: "Rangunia", bnName: "রাঙ্গুনিয়া" },
  { id: "patiya", districtId: "chattagram-dist", name: "Patiya", bnName: "পটিয়া" },
  { id: "boalkhali", districtId: "chattagram-dist", name: "Boalkhali", bnName: "বোয়ালখালী" },
  { id: "anwara", districtId: "chattagram-dist", name: "Anwara", bnName: "আনোয়ারা" },
  { id: "sitakunda", districtId: "chattagram-dist", name: "Sitakunda", bnName: "সীতাকুণ্ড" },
  { id: "mirsharai", districtId: "chattagram-dist", name: "Mirsharai", bnName: "মীরসরাই" },
  { id: "fatikchhari", districtId: "chattagram-dist", name: "Fatikchhari", bnName: "ফটিকছড়ি" },
  { id: "sandwip", districtId: "chattagram-dist", name: "Sandwip", bnName: "সন্দ্বীপ" },

  // Cox's Bazar District
  { id: "coxs-bazar-sadar", districtId: "coxs-bazar", name: "Cox's Bazar Sadar", bnName: "কক্সবাজার সদর" },
  { id: "chakaria", districtId: "coxs-bazar", name: "Chakaria", bnName: "চকোরিয়া" },
  { id: "maheshkhali", districtId: "coxs-bazar", name: "Maheshkhali", bnName: "মহেশখালী" },
  { id: "teknaf", districtId: "coxs-bazar", name: "Teknaf", bnName: "টেকনাফ" },
  { id: "ukhiya", districtId: "coxs-bazar", name: "Ukhiya", bnName: "উখিয়া" },
  { id: "ramu", districtId: "coxs-bazar", name: "Ramu", bnName: "রামু" },
  { id: "kutubdia", districtId: "coxs-bazar", name: "Kutubdia", bnName: "কুতুবদিয়া" },
  { id: "pekua", districtId: "coxs-bazar", name: "Pekua", bnName: "পেকুয়া" },

  // Cumilla District
  { id: "cumilla-sadar", districtId: "cumilla", name: "Cumilla Adarsha Sadar", bnName: "কুমিল্লা আদর্শ সদর" },
  { id: "daudkandi", districtId: "cumilla", name: "Daudkandi", bnName: "দাউদকান্দি" },
  { id: "chandina", districtId: "cumilla", name: "Chandina", bnName: "চান্দিনা" },
  { id: "debidwar", districtId: "cumilla", name: "Debidwar", bnName: "দেবিদ্বার" },
  { id: "homna", districtId: "cumilla", name: "Homna", bnName: "হোমনা" },
  { id: "muradnagar", districtId: "cumilla", name: "Muradnagar", bnName: "মুরাদনগর" },
  { id: "burichang", districtId: "cumilla", name: "Burichang", bnName: "বুড়িচং" },
  { id: "laksam", districtId: "cumilla", name: "Laksam", bnName: "লাকসাম" },
  { id: "chauddagram", districtId: "cumilla", name: "Chauddagram", bnName: "চৌদ্দগ্রাম" },

  // Brahmanbaria District
  { id: "brahmanbaria-sadar", districtId: "brahmanbaria", name: "Brahmanbaria Sadar", bnName: "ব্রাহ্মণবাড়িয়া সদর" },
  { id: "ashuganj", districtId: "brahmanbaria", name: "Ashuganj", bnName: "আশুগঞ্জ" },
  { id: "nasirnagar", districtId: "brahmanbaria", name: "Nasirnagar", bnName: "নাসিরনগর" },
  { id: "nabinagar", districtId: "brahmanbaria", name: "Nabinagar", bnName: "নবীনগর" },
  { id: "sarail", districtId: "brahmanbaria", name: "Sarail", bnName: "সরাইল" },
  { id: "kasba", districtId: "brahmanbaria", name: "Kasba", bnName: "কসবা" },
  { id: "akhaura", districtId: "brahmanbaria", name: "Akhaura", bnName: "আখাউড়া" },

  // Chandpur District
  { id: "chandpur-sadar", districtId: "chandpur", name: "Chandpur Sadar", bnName: "চাঁদপুর সদর" },
  { id: "faridganj", districtId: "chandpur", name: "Faridganj", bnName: "ফরিদগঞ্জ" },
  { id: "haimchar", districtId: "chandpur", name: "Haimchar", bnName: "হাইমচর" },
  { id: "haziganj", districtId: "chandpur", name: "Haziganj", bnName: "হাজীগঞ্জ" },
  { id: "kachua-chp", districtId: "chandpur", name: "Kachua", bnName: "কচুয়া" },

  // Feni District
  { id: "feni-sadar", districtId: "feni", name: "Feni Sadar", bnName: "ফেনী সদর" },
  { id: "daganbhuiyan", districtId: "feni", name: "Daganbhuiyan", bnName: "দাগনভূঞা" },
  { id: "chhagalnaiya", districtId: "feni", name: "Chhagalnaiya", bnName: "ছাগলনাইয়া" },
  { id: "sonagazi", districtId: "feni", name: "Sonagazi", bnName: "সোনাগাজী" },
  { id: "parshuram", districtId: "feni", name: "Parshuram", bnName: "পরশুরাম" },

  // Noakhali District
  { id: "noakhali-sadar", districtId: "noakhali", name: "Noakhali Sadar", bnName: "নোয়াখালী সদর" },
  { id: "begumganj", districtId: "noakhali", name: "Begumganj", bnName: "বেগমগঞ্জ" },
  { id: "chatkhil", districtId: "noakhali", name: "Chatkhil", bnName: "চাটখিল" },
  { id: "companiganj-nkh", districtId: "noakhali", name: "Companiganj", bnName: "কোম্পানীগঞ্জ" },
  { id: "hatiya", districtId: "noakhali", name: "Hatiya", bnName: "হাতিয়া" },
  { id: "senbagh", districtId: "noakhali", name: "Senbagh", bnName: "সেনবাগ" },

  // Lakshmipur District
  { id: "lakshmipur-sadar", districtId: "lakshmipur", name: "Lakshmipur Sadar", bnName: "লক্ষ্মীপুর সদর" },
  { id: "raipur", districtId: "lakshmipur", name: "Raipur", bnName: "রায়পুর" },
  { id: "ramganj", districtId: "lakshmipur", name: "Ramganj", bnName: "রামগঞ্জ" },
  { id: "ramgati", districtId: "lakshmipur", name: "Ramgati", bnName: "রামগতি" },

  // Khagrachhari, Rangamati, Bandarban
  { id: "khagrachhari-sadar", districtId: "khagrachhari", name: "Khagrachhari Sadar", bnName: "খাগড়াছড়ি সদর" },
  { id: "matiranga", districtId: "khagrachhari", name: "Matiranga", bnName: "মাটিরাঙ্গা" },
  { id: "dighinala", districtId: "khagrachhari", name: "Dighinala", bnName: "দিঘীনালা" },
  { id: "rangamati-sadar", districtId: "rangamati", name: "Rangamati Sadar", bnName: "রাঙ্গামাটি সদর" },
  { id: "kaptai", districtId: "rangamati", name: "Kaptai", bnName: "কাপ্তাই" },
  { id: "baghaichhari", districtId: "rangamati", name: "Baghaichhari", bnName: "বাঘাইছড়ি" },
  { id: "bandarban-sadar", districtId: "bandarban", name: "Bandarban Sadar", bnName: "বান্দরবান সদর" },
  { id: "ruma", districtId: "bandarban", name: "Ruma", bnName: "রুমা" },
  { id: "lama", districtId: "bandarban", name: "Lama", bnName: "লামা" },

  // Rajshahi District
  { id: "boalia", districtId: "rajshahi-dist", name: "Boalia", bnName: "বোয়ালিয়া" },
  { id: "rajputra", districtId: "rajshahi-dist", name: "Rajpara", bnName: "রাজপাড়া" },
  { id: "motihar", districtId: "rajshahi-dist", name: "Motihar", bnName: "মতিহার" },
  { id: "godagari", districtId: "rajshahi-dist", name: "Godagari", bnName: "গোদাগাড়ী" },
  { id: "tanore", districtId: "rajshahi-dist", name: "Tanore", bnName: "তানোর" },
  { id: "bagmara", districtId: "rajshahi-dist", name: "Bagmara", bnName: "বাগমারা" },
  { id: "puthia", districtId: "rajshahi-dist", name: "Puthia", bnName: "পুঠিয়া" },

  // Bogura District
  { id: "bogura-sadar", districtId: "bogura", name: "Bogura Sadar", bnName: "বগুড়া সদর" },
  { id: "shibganj-bog", districtId: "bogura", name: "Shibganj", bnName: "শিবগঞ্জ" },
  { id: "gabtali", districtId: "bogura", name: "Gabtali", bnName: "গাবতলী" },
  { id: "sariakandi", districtId: "bogura", name: "Sariakandi", bnName: "সারিয়াকান্দি" },
  { id: "sherpur-bog", districtId: "bogura", name: "Sherpur", bnName: "শেরপুর" },

  // Pabna District
  { id: "pabna-sadar", districtId: "pabna", name: "Pabna Sadar", bnName: "পাবনা সদর" },
  { id: "ishwardi", districtId: "pabna", name: "Ishwardi", bnName: "ঈশ্বরদী" },
  { id: "chatmohar", districtId: "pabna", name: "Chatmohar", bnName: "চাটমোহর" },
  { id: "bera", districtId: "pabna", name: "Bera", bnName: "বেড়া" },
  { id: "santhia", districtId: "pabna", name: "Santhia", bnName: "সাঁথিয়া" },

  // Sirajganj District
  { id: "sirajganj-sadar", districtId: "sirajganj", name: "Sirajganj Sadar", bnName: "সিরাজগঞ্জ সদর" },
  { id: "belkuchi", districtId: "sirajganj", name: "Belkuchi", bnName: "বেলকুচি" },
  { id: "shahjadpur", districtId: "sirajganj", name: "Shahjadpur", bnName: "শাহজাদপুর" },
  { id: "ullahpara", districtId: "sirajganj", name: "Ullahpara", bnName: "উল্লাপাড়া" },
  { id: "kazipur", districtId: "sirajganj", name: "Kazipur", bnName: "কাজীপুর" },

  // Naogaon District
  { id: "naogaon-sadar", districtId: "naogaon", name: "Naogaon Sadar", bnName: "নওগাঁ সদর" },
  { id: "mohadevpur", districtId: "naogaon", name: "Mohadevpur", bnName: "মহাদেবপুর" },
  { id: "manda", districtId: "naogaon", name: "Manda", bnName: "মান্দা" },
  { id: "patnitala", districtId: "naogaon", name: "Patnitala", bnName: "পত্নীতলা" },

  // Natore District
  { id: "natore-sadar", districtId: "natore", name: "Natore Sadar", bnName: "নাটোর সদর" },
  { id: "singra", districtId: "natore", name: "Singra", bnName: "সিংড়া" },
  { id: "baraigram", districtId: "natore", name: "Baraigram", bnName: "বড়াইগ্রাম" },
  { id: "bagatipara", districtId: "natore", name: "Bagatipara", bnName: "বাগাতিপাড়া" },

  // Chapainawabganj & Joypurhat
  { id: "chapainawabganj-sadar", districtId: "chapainawabganj", name: "Chapainawabganj Sadar", bnName: "চাঁপাইনবাবগঞ্জ সদর" },
  { id: "shibganj-cnj", districtId: "chapainawabganj", name: "Shibganj", bnName: "শিবগঞ্জ" },
  { id: "joypurhat-sadar", districtId: "joypurhat", name: "Joypurhat Sadar", bnName: "জয়পুরহাট সদর" },
  { id: "panchbibi", districtId: "joypurhat", name: "Panchbibi", bnName: "পাঁচবিবি" },

  // Khulna District
  { id: "khulna-sadar", districtId: "khulna-dist", name: "Khulna Sadar", bnName: "খুলনা সদর" },
  { id: "sonadanga", districtId: "khulna-dist", name: "Sonadanga", bnName: "সোনাডাঙ্গা" },
  { id: "khalishpur", districtId: "khulna-dist", name: "Khalishpur", bnName: "খালিশপুর" },
  { id: "daulatpur-khl", districtId: "khulna-dist", name: "Daulatpur", bnName: "দৌলতপুর" },
  { id: "dumuria", districtId: "khulna-dist", name: "Dumuria", bnName: "ডুমুরিয়া" },
  { id: "paikgachha", districtId: "khulna-dist", name: "Paikgachha", bnName: "পাইকগাছা" },
  { id: "koyra", districtId: "khulna-dist", name: "Koyra", bnName: "কয়রা" },

  // Jashore District
  { id: "jashore-sadar", districtId: "jashore", name: "Jashore Sadar", bnName: "যশোর সদর" },
  { id: "abhaynagar", districtId: "jashore", name: "Abhaynagar", bnName: "অভয়নগর" },
  { id: "jhikargachha", districtId: "jashore", name: "Jhikargachha", bnName: "ঝিকরগাছা" },
  { id: "keshabpur", districtId: "jashore", name: "Keshabpur", bnName: "কেশবপুর" },
  { id: "sharsha", districtId: "jashore", name: "Sharsha", bnName: "শার্শা" },

  // Satkhira, Bagerhat, Kushtia
  { id: "satkhira-sadar", districtId: "satkhira", name: "Satkhira Sadar", bnName: "সাতক্ষীরা সদর" },
  { id: "kalaroa", districtId: "satkhira", name: "Kalaroa", bnName: "কলারোয়া" },
  { id: "shyamnagar", districtId: "satkhira", name: "Shyamnagar", bnName: "শ্যামনগর" },
  { id: "bagerhat-sadar", districtId: "bagerhat", name: "Bagerhat Sadar", bnName: "বাগেরহাট সদর" },
  { id: "mongla", districtId: "bagerhat", name: "Mongla", bnName: "মোংলা" },
  { id: "morrelganj", districtId: "bagerhat", name: "Morrelganj", bnName: "মোরেলগঞ্জ" },
  { id: "kushtia-sadar", districtId: "kushtia", name: "Kushtia Sadar", bnName: "কুষ্টিয়া সদর" },
  { id: "kumarkhali", districtId: "kushtia", name: "Kumarkhali", bnName: "কুমারখালী" },
  { id: "bheramara", districtId: "kushtia", name: "Bheramara", bnName: "ভেড়ামারা" },

  // Jhenaidah, Chuadanga, Meherpur, Magura, Narail
  { id: "jhenaidah-sadar", districtId: "jhenaidah", name: "Jhenaidah Sadar", bnName: "ঝিনাইদহ সদর" },
  { id: "kaliganj-jhn", districtId: "jhenaidah", name: "Kaliganj", bnName: "কালীগঞ্জ" },
  { id: "chuadanga-sadar", districtId: "chuadanga", name: "Chuadanga Sadar", bnName: "চুয়াডাঙ্গা সদর" },
  { id: "damurhuda", districtId: "chuadanga", name: "Damurhuda", bnName: "দামুড়হুদা" },
  { id: "meherpur-sadar", districtId: "meherpur", name: "Meherpur Sadar", bnName: "মেহেরপুর সদর" },
  { id: "mujibnagar", districtId: "meherpur", name: "Mujibnagar", bnName: "মুজিবনগর" },
  { id: "magura-sadar", districtId: "magura", name: "Magura Sadar", bnName: "মাগুরা সদর" },
  { id: "sreepur-mag", districtId: "magura", name: "Sreepur", bnName: "শ্রীপুর" },
  { id: "narail-sadar", districtId: "narail", name: "Narail Sadar", bnName: "নড়াইল সদর" },
  { id: "lohagara-nrl", districtId: "narail", name: "Lohagara", bnName: "লোহাগড়া" },

  // Barisal District
  { id: "barisal-sadar", districtId: "barisal-dist", name: "Barisal Sadar", bnName: "বরিশাল সদর" },
  { id: "babuganj", districtId: "barisal-dist", name: "Babuganj", bnName: "বাবুগঞ্জ" },
  { id: "bakerganj", districtId: "barisal-dist", name: "Bakerganj", bnName: "বাকেরগঞ্জ" },
  { id: "gaurnadi", districtId: "barisal-dist", name: "Gaurnadi", bnName: "গৌরনদী" },
  { id: "mehendiganj", districtId: "barisal-dist", name: "Mehendiganj", bnName: "মেহেন্দিগঞ্জ" },

  // Bhola, Patuakhali, Pirojpur, Barguna, Jhalokathi
  { id: "bhola-sadar", districtId: "bhola", name: "Bhola Sadar", bnName: "ভোলা সদর" },
  { id: "char-fasson", districtId: "bhola", name: "Char Fasson", bnName: "চরফ্যাশন" },
  { id: "patuakhali-sadar", districtId: "patuakhali", name: "Patuakhali Sadar", bnName: "পটুয়াখালী সদর" },
  { id: "kalapara", districtId: "patuakhali", name: "Kalapara", bnName: "কলাপাড়া" },
  { id: "pirojpur-sadar", districtId: "pirojpur", name: "Pirojpur Sadar", bnName: "পিরোজপুর সদর" },
  { id: "mathbaria", districtId: "pirojpur", name: "Mathbaria", bnName: "মঠবাড়িয়া" },
  { id: "barguna-sadar", districtId: "barguna", name: "Barguna Sadar", bnName: "বরগুনা সদর" },
  { id: "amtali", districtId: "barguna", name: "Amtali", bnName: "আমতলী" },
  { id: "jhalokathi-sadar", districtId: "jhalokathi", name: "Jhalokathi Sadar", bnName: "ঝালকাঠি সদর" },
  { id: "rajapur", districtId: "jhalokathi", name: "Rajapur", bnName: "রাজাপুর" },

  // Sylhet District
  { id: "sylhet-sadar", districtId: "sylhet-dist", name: "Sylhet Sadar", bnName: "সিলেট সদর" },
  { id: "beanibazar", districtId: "sylhet-dist", name: "Beanibazar", bnName: "বিয়ানীবাজার" },
  { id: "bishwanath", districtId: "sylhet-dist", name: "Bishwanath", bnName: "বিশ্বনাথ" },
  { id: "fenchuganj", districtId: "sylhet-dist", name: "Fenchuganj", bnName: "ফেঞ্চুগঞ্জ" },
  { id: "golapganj", districtId: "sylhet-dist", name: "Golapganj", bnName: "গোলাপগঞ্জ" },
  { id: "gowainghat", districtId: "sylhet-dist", name: "Gowainghat", bnName: "গোয়াইনঘাট" },
  { id: "jaintiapur", districtId: "sylhet-dist", name: "Jaintiapur", bnName: "জৈন্তাপুর" },
  { id: "sreemangal", districtId: "moulvibazar", name: "Sreemangal", bnName: "শ্রীমঙ্গল" },
  { id: "moulvibazar-sadar", districtId: "moulvibazar", name: "Moulvibazar Sadar", bnName: "মৌলভীবাজার সদর" },
  { id: "kamalganj", districtId: "moulvibazar", name: "Kamalganj", bnName: "কমলগঞ্জ" },
  { id: "habiganj-sadar", districtId: "habiganj", name: "Habiganj Sadar", bnName: "হবিগঞ্জ সদর" },
  { id: "nabiganj", districtId: "habiganj", name: "Nabiganj", bnName: "নবীগঞ্জ" },
  { id: "sunamganj-sadar", districtId: "sunamganj", name: "Sunamganj Sadar", bnName: "সুনামগঞ্জ সদর" },
  { id: "tahirpur", districtId: "sunamganj", name: "Tahirpur", bnName: "তাহিরপুর" },

  // Rangpur District
  { id: "rangpur-sadar", districtId: "rangpur-dist", name: "Rangpur Sadar", bnName: "রংপুর সদর" },
  { id: "badarganj", districtId: "rangpur-dist", name: "Badarganj", bnName: "বদরগঞ্জ" },
  { id: "pirganj-rnp", districtId: "rangpur-dist", name: "Pirganj", bnName: "পীরগঞ্জ" },
  { id: "dinajpur-sadar", districtId: "dinajpur", name: "Dinajpur Sadar", bnName: "দিনাজপুর সদর" },
  { id: "parbatipur", districtId: "dinajpur", name: "Parbatipur", bnName: "পার্বতীপুর" },
  { id: "gaibandha-sadar", districtId: "gaibandha", name: "Gaibandha Sadar", bnName: "গাইবান্ধা সদর" },
  { id: "gobindaganj", districtId: "gaibandha", name: "Gobindaganj", bnName: "গোবিন্দগঞ্জ" },
  { id: "kurigram-sadar", districtId: "kurigram", name: "Kurigram Sadar", bnName: "কুড়িগ্রাম সদর" },
  { id: "ulipur", districtId: "kurigram", name: "Ulipur", bnName: "উলিপুর" },
  { id: "lalmonirhat-sadar", districtId: "lalmonirhat", name: "Lalmonirhat Sadar", bnName: "লালমনিরহাট সদর" },
  { id: "patgram", districtId: "lalmonirhat", name: "Patgram", bnName: "পাটগ্রাম" },
  { id: "nilphamari-sadar", districtId: "nilphamari", name: "Nilphamari Sadar", bnName: "নীলফামারী সদর" },
  { id: "saidpur", districtId: "nilphamari", name: "Saidpur", bnName: "সৈয়দপুর" },
  { id: "panchagarh-sadar", districtId: "panchagarh", name: "Panchagarh Sadar", bnName: "পঞ্চগড় সদর" },
  { id: "tetulia", districtId: "panchagarh", name: "Tetulia", bnName: "তেঁতুলিয়া" },
  { id: "thakurgaon-sadar", districtId: "thakurgaon", name: "Thakurgaon Sadar", bnName: "ঠাকুরগাঁও সদর" },
  { id: "pirganj-thk", districtId: "thakurgaon", name: "Pirganj", bnName: "পীরগঞ্জ" },

  // Mymensingh District
  { id: "mymensingh-sadar", districtId: "mymensingh-dist", name: "Mymensingh Sadar", bnName: "ময়মনসিংহ সদর" },
  { id: "bhaluka", districtId: "mymensingh-dist", name: "Bhaluka", bnName: "ভালুকা" },
  { id: "trishal", districtId: "mymensingh-dist", name: "Trishal", bnName: "ত্রিশাল" },
  { id: "muktagachha", districtId: "mymensingh-dist", name: "Muktagachha", bnName: "মুক্তাগাছা" },
  { id: "gaffargaon", districtId: "mymensingh-dist", name: "Gaffargaon", bnName: "গফরগাঁও" },
  { id: "jamalpur-sadar", districtId: "jamalpur", name: "Jamalpur Sadar", bnName: "জামালপুর সদর" },
  { id: "sarishabari", districtId: "jamalpur", name: "Sarishabari", bnName: "সরিষাবাড়ী" },
  { id: "netrokona-sadar", districtId: "netrokona", name: "Netrokona Sadar", bnName: "নেত্রকোণা সদর" },
  { id: "durgapur-ntk", districtId: "netrokona", name: "Durgapur", bnName: "দুর্গাপুর" },
  { id: "sherpur-sadar", districtId: "sherpur", name: "Sherpur Sadar", bnName: "শেরপুর সদর" },
  { id: "nalitabari", districtId: "sherpur", name: "Nalitabari", bnName: "নালিতাবাড়ী" },
];

// Helper functions for easy filtering
export function getDistrictsByDivision(divisionId: string): District[] {
  if (!divisionId) return DISTRICTS;
  return DISTRICTS.filter((d) => d.divisionId === divisionId);
}

export function getUpazilasByDistrict(districtId: string): Upazila[] {
  if (!districtId) return [];
  return UPAZILAS.filter((u) => u.districtId === districtId);
}

export function getDivisionByDistrictId(districtId: string): string | undefined {
  const dist = DISTRICTS.find((d) => d.id === districtId);
  return dist?.divisionId;
}
