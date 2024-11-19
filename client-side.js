if (window.location.protocol !== "https:") {
    window.location.href = "https://" + window.location.host + window.location.pathname;
} else {
    // SSL сертификат баталгаажсан эсэхийг шалгах
    console.log('Secure connection established');
}
