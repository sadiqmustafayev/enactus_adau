const teamDetails = {
  yaver_pashayev: {
    name: "Yaver Pashayev",
    role: "President",
    description: "Yaver Pashayev komandanın rəhbəridir və strateji qərarların verilməsində lider rolunu oynayır.",
    image: "images/team/yaver_pashayev.jpg",
  },
  elcan_haydarov: {
    name: "Elcan Haydarov",
    role: "Vice President",
    description: "Elcan Haydarov, komanda lideri kimi mühüm vəzifələrdə iştirak edir. O, layihələrin idarə olunmasında geniş təcrübəyə malikdir və komandanın inkişafına xüsusi töhfə verir.",
    image: "images/team/elcan_haydarov.jpg",
  },
  gulshan_alekberova: {
    name: "Gulshan Alekberova",
    role: "Vice President",
    description: "Gulshan Alekberova, komandanın təcrübəli üzvüdür və layihələrin həyata keçirilməsində fəal iştirak edir. O, həmçinin komandanın daxili əməliyyatlarına böyük töhfə verir.",
    image: "images/team/gulshen_alekberova.jpg"
  },
  sara_mammedova: {
    name: "Sara Mammadova",
    role: "HR Manager",
    description: "Sara Mammadova, şirkətimizin İnsan Resursları Meneceridir. O, kadr seçimi, əməkdaşların inkişafı və daxili kommunikasiya üzrə təcrübəyə malikdir. Sara həmçinin, şirkətin strateji hədəflərinə uyğun insan resursları strategiyalarını tətbiq edir və işçilərin məmnuniyyətini artırmağa çalışır.",
    image: "images/team/sara_mammedova.jpg"
  },
  zohrexkhanim_abbasova: {
    name: "Zohrexkhanim Abbasova",
    role: "PR Manager",
    description: "Zohrexkhanim Abbasova, şirkətimizin PR Meneceridir. O, şirkətin ictimai əlaqələrini idarə edir və media ilə münasibətləri gücləndirir. Zohrexkhanim, şirkətin nüfuzunun artırılması və brendin düzgün təqdim edilməsi üçün strateji PR kampaniyaları həyata keçirir. Həmçinin, o, müştərilərlə əlaqələri inkişaf etdirir və ictimaiyyətlə ünsiyyətdə mühüm rol oynayır.",
    image: "images/team/zohrexanim_abbasova.jpg"
  },
  bayram_suleymanov: {
    name: "Bayram Suleymanov",
    role: "Project Manager",
    description: "Bayram Suleymanov, layihə idarəetməsi sahəsində geniş təcrübəyə malik bir mütəxəssisdir. O, layihələrin planlaşdırılması, təşkil olunması və izlənməsi proseslərində əsas rol oynayır. Bayram, həmçinin komanda üzvləri ilə sıx əməkdaşlıq edərək, layihələrin vaxtında və büdcəyə uyğun şəkildə tamamlanmasını təmin edir. Onun liderlik və təşkilatçılıq qabiliyyətləri, hər bir layihənin uğurla həyata keçirilməsinə kömək edir.",
    image: "images/team/bayram_suleymanov.jpg"
  },
  sadiq_mustafayev: {
    name: "Sadiq Mustafayev",
    role: "IT Manager",
    description: "Sadiq Mustafayev, şirkətin IT infrastrukturu və texnologiyaları ilə bağlı mühüm qərarlar qəbul edən təcrübəli bir mütəxəssisdir. O, sistemlərin idarə edilməsi, təhlükəsizlik məsələləri və texnoloji inkişafları izləyərək komandanın IT ehtiyaclarını təmin edir. Sadiq, həmçinin texnologiyanın şirkət daxilində səmərəli işləməsini təmin edərək, müasir IT həlləri təqdim edir.",
    image: "images/team/sadiq_mustafayev.jpg"
  },
  khanlar_ismayilov: {
    name: "Khanlar Ismayilov",
    role: "SMM Manager",
    description: "Khanlar Ismayilov, sosial media strategiyalarını və kampaniyalarını hazırlamaq və idarə etməkdə böyük təcrübəyə malik bir mütəxəssisdir. O, şirkətin sosial media hesablarını effektiv şəkildə idarə edir, brendin tanınmasını artırmaq və hədəf kütləyə çatmaq üçün kreativ yanaşmalar təqdim edir.",
    image: "images/team/khanlar_ismayilov.jpg"
  },
  nurali_ilyasli: {
    name: "Nurali Ilyasli",
    role: "Finance Manager",
    description: "Nurali Ilyasli, maliyyə idarəetməsi və analizi sahəsində təcrübəli bir mütəxəssisdir. O, şirkətin maliyyə strategiyalarını qurur, büdcə və xərcləri idarə edir, gəlirliliyi artırmaq üçün əsas maliyyə göstəricilərini izləyir.",
    image: "images/team/nurali_ilyasli.jpg"
  },
  khanimbeyim_musayeva: {
    name: "Khanimbeyim Musayeva",
    role: "Designer",
    description: "Khanimbeyim Musayeva, kreativ dizayn və vizual kompozisiya sahəsində mütəxəssisdir. O, layihələrin estetik tərtibatında və istifadəçi təcrübəsi dizaynında geniş təcrübəyə malikdir, vizual həllərin effektivliyini artırmaq üçün çoxsaylı layihələrdə iştirak edib.",
    image: "images/team/khanimbeyim_musayeva.jpg"
  },
  tajir_isbatov: {
    name: "Tajir Isbatov",
    role: "Team Member",
    description: "Tajir Isbatov, komandamızın fəal üzvüdür və müxtəlif layihələrdə müsbət töhfələr verir. O, həmçinin komanda ilə sıx əməkdaşlıq edərək layihələrin daha səmərəli və effektiv həyata keçirilməsinə dəstək olur. Tajir, öz təşəbbüsləri və bacarıqları ilə komandanın güclü tərəflərini artıran bir üzvdür.",
    image: "images/team/tajir_isbatov.jpg"
  },
  sema_aslanova: {
    name: "Sema Aslanova",
    role: "Team Member",
    description: "Sema Aslanova, komandamızın fəal və təcrübəli üzvüdür. O, layihələrin idarə olunmasında və komanda içində əlaqələrin gücləndirilməsində mühüm rol oynayır. Sema, hər bir tapşırığı yüksək məsuliyyətlə yerinə yetirərək komandanın inkişafına böyük töhfə verir.",
    image: "images/team/sema_aslanova.jpg"
  },
  ayshan_orujova: {
    name: "Ayshan Orujova",
    role: "Team Member",
    description: "Ayshan Orujova, komandamızın dinamik və kreativ üzvüdür. O, həm layihələrin müvəffəqiyyətlə həyata keçirilməsində, həm də komanda daxilində müsbət atmosferin yaradılmasında mühüm rol oynayır. Ayshan, innovativ yanaşmaları ilə komandanın uğurlarına böyük töhfə verir.",
    image: "images/team/ayshan_orujova.jpg"
  },
};

function showTeamDetails(memberKey) {
  const member = teamDetails[memberKey];
  if (member) {
    document.getElementById('team-detail').innerHTML = `
      <div class="container">
        <div class="heading-container">
          <h2>${member.name}</h2>
        </div>
        <div class="team-member">
          <div class="image-box">
            <img src="${member.image}" alt="${member.name}">
          </div>
          <div class="detail-box">
            <h3>${member.name}</h3>
            <h5>${member.role}</h5>
            <p>${member.description}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById('team-detail').innerHTML = "<p>Member not found!</p>";
  }
}
