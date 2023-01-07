import { navigationData } from "./navigation-data";

  export const trimData = (data, length) => {
    if(!data || typeof(data) !== 'string') {
      return '';
    }
    if(!length || typeof(length) !== 'number') {
      return data;
    }
    if(data.length > length) {
      return data.substring(0, length - 3) + '...'
    } else {
      return data;
    }
  }

  export const goToLink = (link) => {
    if(link) {
      window.open(link);
    }
  }

  export const navigateTo2 = (point) => {
    if(point) {
      window.scrollTo(0, point);
    }
  }

  export const navigateTo = (index) => {
    if(navigationData[index]) {
      const activeSect = document.getElementById(navigationData[index].id);
      activeSect.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  export const navigateToId = (id) => {
    if(id) {
      const activeSect = document.getElementById(id);
      activeSect.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  export const mobileMode = () => {
    if(window.innerWidth < 770) {
      return true
    } else {
      return false
    }
  }

  export const handleSHeaderOnScroll = () => {
    window.addEventListener('scroll', () => {
      // console.log({offset: window.pageYOffset});
    });
  }