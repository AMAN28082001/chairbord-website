import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const useTrackUserSource = () => {
  const location = useLocation();
  const [visitData, setVisitData] = useState({});

  useEffect(() => {
    const initTracking = async () => {
      const urlParams = new URLSearchParams(location.search);
      const currentUrl = window.location.href;

      // Session/Local storage tracking
      const isNewSession = !localStorage.getItem('session_start_time');
      if (isNewSession) {
        localStorage.setItem('session_start_time', new Date().toISOString());
        localStorage.setItem('first_entry_page', currentUrl);
        localStorage.setItem('session_page_visit_count', '1');
        localStorage.setItem('total_visit_count', '1');
      } else {
        const existingSessionCount = parseInt(localStorage.getItem('session_page_visit_count')) || 0;
        const existingTotalCount = parseInt(localStorage.getItem('total_visit_count')) || 0;
        localStorage.setItem('session_page_visit_count', (existingSessionCount + 1).toString());
        localStorage.setItem('total_visit_count', (existingTotalCount + 1).toString());
      }

      if (!sessionStorage.getItem('Landing_page')) {
        sessionStorage.setItem('Landing_page', currentUrl);
      }

      // Get browser/device info
      const userAgent = navigator.userAgent;
      const Language = navigator.language;
      const screenResolution = `${window.screen.width}x${window.screen.height}`;

      let Browser_Name = 'Unknown', Os_Name = 'Unknown', Device_Type = 'Desktop';

      if (/android/i.test(userAgent)) {
        Os_Name = 'Android'; Device_Type = 'Mobile';
      } else if (/iphone|ipad|ipod/i.test(userAgent)) {
        Os_Name = 'iOS'; Device_Type = 'Mobile';
      } else if (/windows/i.test(userAgent)) {
        Os_Name = 'Windows';
      } else if (/mac/i.test(userAgent)) {
        Os_Name = 'MacOS';
      } else if (/linux/i.test(userAgent)) {
        Os_Name = 'Linux';
      }

      if (/edg/i.test(userAgent)) Browser_Name = 'Edge';
      else if (/chrome/i.test(userAgent)) Browser_Name = 'Chrome';
      else if (/safari/i.test(userAgent)) Browser_Name = 'Safari';
      else if (/firefox/i.test(userAgent)) Browser_Name = 'Firefox';
      else if (/msie|trident/i.test(userAgent)) Browser_Name = 'Internet Explorer';

      // Helper to fetch session or URL parameters
      const getParam = (name) => {
        const sessionValue = sessionStorage.getItem(name);
        const paramValue = urlParams.get(name);
        if (paramValue && !sessionValue) sessionStorage.setItem(name, paramValue);
        return sessionValue || paramValue || null;
      };

      const Lead_Source = (() => {
        const adSource = getParam('source');
        if (adSource?.includes('Facebook_Ads')) return 'Facebook Ads';
        if (adSource?.includes('Google_Ads')) return 'Google Ads';
        if (adSource?.includes('Instagram_Ads')) return 'Instagram Ads';
        if (adSource?.includes('Twitter_Ads')) return 'Twitter Ads';
        if (adSource) return 'Other Ads';
        if (document.referrer.includes('google.')) return 'Google Search';
        if (document.referrer.includes('bing.')) return 'Bing Search';
        if (document.referrer.includes('yahoo.')) return 'Yahoo Search';
        if (document.referrer.includes('duckduckgo.')) return 'DuckDuckGo Search';
        if (document.referrer.includes('baidu.')) return 'Baidu Search';
        if (document.referrer.includes('yandex.')) return 'Yandex Search';
        if (document.referrer === '') return 'WebSite Visit';
        return 'Reference';
      })();

      const baseDetails = {
        Language,
        Os_Name,
        Device_Type,
        Browser_Name,
        Screen_Resolution: screenResolution,
        Current_Page: currentUrl,
        Visitor_First_Page: localStorage.getItem('first_entry_page'),
        Landing_page: sessionStorage.getItem('Landing_page'),
        Visit_Count: localStorage.getItem('total_visit_count'),
        Lead_Source,
        Referrer: document.referrer || null,
        Ad_Medium: getParam('medium'),
        Ad_CampaignName: getParam('campaignname'),
        Ad_Campaign: getParam('campaignid'),
        Ad_AdGroup: getParam('adgroupid'),
        Ad_Adcopy: getParam('creative'),
        Ad_Keyword: getParam('keyword'),
        Ad_Matchtype: getParam('matchtype'),
        Ad_Device: getParam('device'),
        Ad_Gclid: getParam('gclid'),
      };

      // Fetch location data with fallbacks
      try {
        const { data: ipData } = await axios.get('https://ipinfo.io/json/');
        const { data: locData } = await axios.get(`http://ipwho.is/${ipData.ip}`);

        setVisitData({
          ...baseDetails,
          IP_Address: ipData.ip,
          Country: locData.country,
          Country_ISO2: locData.country_code,
          City: locData.city,
          Web_Region: locData.region,
          Latitude: locData.latitude,
          Longitude: locData.longitude,
          Zip_Code: locData.postal,
        });
      } catch {
        try {
          const { data } = await axios.get('https://ipapi.co/json/');
          setVisitData({
            ...baseDetails,
            IP_Address: data.ip,
            Country: data.country_name,
            Country_ISO2: data.country_code,
            City: data.city,
            Web_Region: data.region,
            Latitude: data.latitude,
            Longitude: data.longitude,
            Zip_Code: data.postal,
          });
        } catch {
          try {
            const { data } = await axios.get('https://api.ipify.org?format=json');
            const { data: locData } = await axios.get(`http://ipwho.is/${data.ip}`);

            setVisitData({
              ...baseDetails,
              IP_Address: data.ip,
              Country: locData.country,
              Country_ISO2: locData.country_code,
              City: locData.city,
              Web_Region: locData.region,
              Latitude: locData.latitude,
              Longitude: locData.longitude,
              Zip_Code: locData.postal,
            });
          } catch {
            setVisitData({
              ...baseDetails,
              IP_Address: null,
              Country: null,
              Country_ISO2: null,
              City: null,
              Web_Region: null,
              Latitude: null,
              Longitude: null,
              Zip_Code: null,
            });
          }
        }
      }
    };

    initTracking();
  }, [location]);

  return visitData;
};

export default useTrackUserSource;
