

var local = true;

if (local) {
    angular.module("Constants", [])
        .constant("loginUrl",'http://192.168.100.37:5000')
        .constant("facebookApp",
            {
                clientId: "1367982889954070",
            })
        .constant("googleApp", {
            clientId: "131112830825-kcictj96r2jrecab88el9kd1mvq8cb1m.apps.googleusercontent.com",
            redirectUri: "http://localhost:8080"
        });
} 

