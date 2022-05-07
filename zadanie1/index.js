const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'data'), function (err, files) {
    if (err) {
        console.log(err);
    } else {
        fs.mkdir(path.join(__dirname, 'dane-urzytkownika'), function (err) {
            if (err) {
                if (err.code === 'EEXIST') {
                    console.log('Folder o podanej nazwie już istnieje');
                }
            } else {
                console.log('Stworzono folder');

            }

        })
        files.forEach(function (file) {
            fs.readFile(path.join(__dirname, 'data', file), function (err, data) {
                if (err) {
                    console.log(err);
                } else {

                    // console.log((JSON.parse(data)));
                    // console.log(data);
                    let dane = JSON.parse(data);
                    for (let pliki of dane) {
                        let username = pliki.name
                        let name = username.split(/\b/)[0]
                        let surname = username.split(/\b/)[2]

                        let userData = `Name : ${name}\n Surname: ${surname}\n Adress: ${pliki.address.street}\n Zipcode: ${pliki.address.zipcode}\n City: ${pliki.address.city}\n Phone: ${pliki.phone}`


                        fs.writeFileSync(path.join(__dirname, 'dane-urzytkownika', pliki.id + '-' + name + '-' + surname + '.txt'), (userData).toString(), function (err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log('stworzono plik');
                            }
                        })

                    }
                }

            })
        })
    }
})

