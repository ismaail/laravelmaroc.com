import hljs from 'highlight.js';
import Choices from 'choices.js';
import { capitalize } from 'lodash';

window.choices = (element) => {
  return new Choices(element, { maxItemCount: 3, removeItemButton: true });
};

window.capitalize = capitalize;

window.highlightCode = (element) => {
  element.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightBlock(block);
  });
};

window.formatMoney = (amount) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF' }).format(amount);
};

const share = function () {
  function popupCenter (url, title, width, height) {
    const popupWidth = width || 640;
    const popupHeight = height || 440;
    const windowLeft = window.screenLeft || window.screenX;
    const windowTop = window.screenTop || window.screenY;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2;
    const popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
    window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
  }

  const twitter = document.querySelector('.share_twitter');
  if (twitter) {
    twitter.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');
      const shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + '&via=laravelcm' + '&url=' + encodeURIComponent(url);
      popupCenter(shareUrl, 'Partager sur Twitter');
    });
  }

  const facebook = document.querySelector('.share_facebook');
  if (facebook) {
    facebook.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');
      const shareUrl = 'https://facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
      popupCenter(shareUrl, 'Partager sur Facebook');
    });
  }

  const linkedin = document.querySelector('.share_linkedin');
  if (linkedin) {
    linkedin.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');
      const shareUrl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(url);
      popupCenter(shareUrl, 'Partager sur LinkedIn');
    });
  }
};

share();

const addAffiliateLink = function () {
  const articleContent = document.getElementById('content');

  if (!articleContent) {
    return;
  }

  const pTags = document.getElementById('content').querySelectorAll('p');
  let i = 0;
  pTags.forEach((p) => {
    if (i === 7) {
      const a = document.createElement('a');
      a.setAttribute('href', 'https://www.digitalocean.com/?refcode=d6dca1691fb4&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge');
      a.setAttribute('target', '_blank');
      a.classList.add('relative', 'affiliate', 'block', 'w-full', 'mb-6', 'overflow-hidden', 'rounded-lg', 'cursor-pointer');
      a.innerHTML = `
           <img src="/images/affiliate-link.jpg" class="w-full rounded-t-lg" alt="Affiliate link" />
           <span class="block w-full h-auto px-3 py-2 font-bold text-center text-white uppercase text-xs bg-gradient-to-r from-green-500 via-indigo-600 to-blue-500">Obtenez le code gratuit en créant votre serveur 🚀</span>
       `;
      p.parentNode.insertBefore(a, p.nextSibling);
    }
    i++;
  });
};

addAffiliateLink();
