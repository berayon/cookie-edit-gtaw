document.addEventListener('DOMContentLoaded', function() {
    const cookieNamePattern = /^ips4_announcement_\d{2}$/;
    const newMaxAge = 60 * 60 * 24 * 365 * 2; // 2 years in seconds
  
    document.cookie.split('; ').forEach(cookie => {
      const [name, value] = cookie.split('=');
      if (cookieNamePattern.test(name)) {
        document.cookie = `${name}=${value}; max-age=${newMaxAge}; path=/`;
      }
    });
  });