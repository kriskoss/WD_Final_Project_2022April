function getFile(U) {
        // converting HTML file into string
        var X = new XMLHttpRequest();
        X.open('GET', U, false);
        X.send();
        return X.responseText;
      }