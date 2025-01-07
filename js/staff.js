
  const staffMembers = [
    {
      name: "Yaver Pashayev",
      role: "President",
      image: "images/team/yaver_pashayev.jpg",
      link: "team-details.html?member=yaver_pashayev",
    },
    {
      name: "Elcan Haydarov",
      role: "Vice President",
      image: "images/team/elcan_haydarov.jpg",
      link: "team-details.html?member=elcan_haydarov",
    },
    {
      name: "Gulshan Alekberova",
      role: "Vice President",
      image: "images/team/gulshen_alekberova.jpg",
      link: "team-details.html?member=gulshan_alekberova",
    },
    {
      name: "Sara Mammadova",
      role: "HR Manager",
      image: "images/team/sara_mammedova.jpg",
      link: "team-details.html?member=sara_mammedova",
    },
    {
      name: "Zohrekhanim Abbasova",
      role: "PR Manager",
      image: "images/team/zohrexanim_abbasova.jpg",
      link: "team-details.html?member=zohrekhanim_abbasova",
    },
    {
      name: "Bayram Suleymanov",
      role: "Project Manager",
      image: "images/team/bayram_suleymanov.jpg",
      link: "team-details.html?member=bayram_suleymanov",
    },
    {
      name: "Sadiq Mustafayev",
      role: "IT Manager",
      image: "images/team/sadiq_mustafayev.jpg",
      link: "team-details.html?member=sadiq_mustafayev",
    },
    {
      name: "Khanlar Ismayilov",
      role: "SMM Manager",
      image: "images/team/khanlar_ismayilov.jpg",
      link: "team-details.html?member=khanlar_ismayilov",
    },
    {
      name: "Nurali Ilyasli",
      role: "Finance Manager",
      image: "images/team/nurali_ilyasli.jpg",
      link: "team-details.html?member=nurali_ilyasli",
    },
    {
      name: "Khanimbeyim Musayeva",
      role: "Designer",
      image: "images/team/khanimbeyim_musayeva.jpg",
      link: "team-details.html?member=khanimbeyim_musayeva",
    },
  ];

  const staffContainer = document.getElementById("staff-container");

  staffMembers.forEach(member => {
    const memberBox = document.createElement("div");
    memberBox.className = "box";

    memberBox.innerHTML = `
      <a href="${member.link}">
        <div class="img-box">
          <img src="${member.image}" class="img1" alt="${member.name}">
        </div>
        <div class="detail-box">
          <h5>${member.name}</h5>
          <p class="p_size">${member.role}</p>
        </div>
      </a>
    `;

    staffContainer.appendChild(memberBox);
  });


const teamMembers = [
  {
    name: "Tajir Isbatov",
    image: "images/team/tajir_isbatov.jpg",
    link: "team-details.html?member=tajir_isbatov",
  },
  {
    name: "Sema Aslanova",
    image: "images/team/sema_aslanova.jpg",
    link: "team-details.html?member=sema_aslanova",
  },
  {
    name: "Ayshan Orujova",
    image: "images/team/ayshan_orujova.jpg",
    link: "team-details.html?member=ayshan_orujova",
  },
];

const teamContainer = document.getElementById("team-container");

teamMembers.forEach(member => {
  const memberBox = document.createElement("div");
  memberBox.className = "box";

  memberBox.innerHTML = `
    <a href="${member.link}">
      <div class="img-box">
        <img src="${member.image}" class="img1" alt="${member.name}">
      </div>
      <div class="detail-box">
        <h5>${member.name}</h5>
      </div>
    </a>
  `;

  teamContainer.appendChild(memberBox);
});