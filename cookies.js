const buttonAcceptCookie = document.getElementById('btn-acceptcookie');
const cookieBanner = document.getElementById('cookiebanner');
const cookieBannerBackground = document.getElementById('cookiebanner-background');

if(!localStorage.getItem('cookies-accepted')){
  cookieBanner.classList.add('active');
  cookieBannerBackground.classList.add('active');
}

buttonAcceptCookie.addEventListener('click', () => {
  cookieBanner.classList.remove('active');
  cookieBannerBackground.remove('active');

  localStorage.setItem('cookies-accepted', true);
});