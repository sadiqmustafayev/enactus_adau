
  const infoData = {
    contact: [
      {
        href: "https://maps.app.goo.gl/eZXpxjRSGuZdXtZT9",
        img: "images/location-white.png",
        text: "ADAU"
      },
      {
        href: "tel:+994770000000",
        img: "images/telephone-white.png",
        text: "Call : +994-77-000-00-00"
      },
      {
        href: "mailto:enactusadauoffical@gmail.com?subject=Subject%20Here&body=Message%20Here",
        img: "images/envelope-white.png",
        text: "enactusadauoffical@gmail.com"
      }
    ],
    social: [
      {
        href: "https://www.facebook.com/profile.php?id=100079334741267",
        img: "images/fb.png",
        alt: "Facebook"
      },
      {
        href: "https://www.tiktok.com/@enactusadau?_t=8mlOkuOMR1M&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaZw8clM5R5tjNMoACDHSjK-AoMUr56v2V6WLFBrms43Tdzo6PPb0_rvYCw_aem_Mqc-jeFXVSHJrOrmq1aNUA",
        img: "images/tiktok.png",
        alt: "TikTok",
        style: "width: 40px; height: 40px; border-radius: 50%; border: 2px solid #000;"
      },
      {
        href: "https://www.instagram.com/enactusadauoffical",
        img: "images/instagram.png",
        alt: "Instagram"
      }
    ]
  };

  const infoContainer = document.getElementById("info-section-container");
  infoContainer.innerHTML = `
    <div class="info_contact">
      <div class="row">
        ${infoData.contact
          .map(
            (item) => `
          <div class="col-md-4">
            <a href="${item.href}">
              <img src="${item.img}" alt="">
              <span>${item.text}</span>
            </a>
          </div>`
          )
          .join("")}
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-lg-9">
        <div class="info_form">
          <form action="">
            <input type="text" placeholder="Enter your email">
            <button>
              subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="col-md-4 col-lg-3">
        <div class="info_social">
          ${infoData.social
            .map(
              (item) => `
            <div>
              <a href="${item.href}">
                <img src="${item.img}" alt="${item.alt}" ${item.style ? `style="${item.style}"` : ""}>
              </a>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
  const footerContainer = document.getElementById("footer-container");
  footerContainer.innerHTML = `
    <div class="row">
      <div class="col-lg-7 col-md-9 mx-auto">
        <p>
          &copy; 2024 All Rights Reserved By Enactus ADAU
        </p>
      </div>
    </div>
  `;
