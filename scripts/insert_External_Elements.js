 function insert_external_elements( target_element, partial_name, ext_file_name) {
        // Function which inserts code of the external HTML file into the selected element 
        var partialSrc = getFile(ext_file_name) 
        Handlebars.registerPartial(partial_name, partialSrc);
        
        var templateSrc = document.getElementById("template").innerHTML
        var template = Handlebars.compile(templateSrc);
                
        document.getElementById(target_element).innerHTML=template()
      } 