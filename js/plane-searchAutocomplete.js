document.addEventListener('DOMContentLoaded', function () {
    function loadScript(url, callback) {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = callback;
        document.head.appendChild(script);
    }

    function autocomplete(input, array) {
        let currentFocus;
        input.addEventListener("input", function () {
            let div, item, i, val = this.value;
            closeAllLists();
            if (!val) return false;
            currentFocus = -1;
            const id = this.id + "autocomplete-list";
            div = document.getElementById(id);
            if (!div) {
                div = document.createElement("div");
                div.setAttribute("id", id);
                div.setAttribute("class", "autocomplete-suggestions");
                this.parentNode.appendChild(div);
            }
            let count = 0;
            for (i = 0; i < array.length && count < 10; i++) {
                if (array[i].city.substr(0, val.length).toUpperCase() == val.toUpperCase() ||
                    array[i].name.substr(0, val.length).toUpperCase() == val.toUpperCase() ||
                    array[i].iata.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    item = document.createElement("div");
                    item.setAttribute("role", "option");
                    item.innerHTML = `<strong>${array[i].city.substr(0, val.length)}</strong>${array[i].city.substr(val.length)} - ${array[i].name} (${array[i].iata})`;
                    item.innerHTML += `<input type='hidden' value='${array[i].name} (${array[i].iata})'>`;
                    item.addEventListener("click", function () {
                        input.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    div.appendChild(item);
                    count++;
                }
            }
        });

        input.addEventListener("keydown", function (e) {
            let x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });

        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = x.length - 1;
            x[currentFocus].classList.add("autocomplete-suggestion-active");

            // Ensure the active item is visible
            const container = document.getElementById(input.id + "autocomplete-list");
            const activeItem = x[currentFocus];
            if (activeItem.offsetTop + activeItem.offsetHeight > container.scrollTop + container.offsetHeight) {
                container.scrollTop = activeItem.offsetTop + activeItem.offsetHeight - container.offsetHeight;
            } else if (activeItem.offsetTop < container.scrollTop) {
                container.scrollTop = activeItem.offsetTop;
            }
        }

        function removeActive(x) {
            for (let i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-suggestion-active");
            }
        }

        function closeAllLists(elmnt) {
            const x = document.getElementsByClassName("autocomplete-suggestions");
            for (let i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != input) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    loadScript('https://screenfeedcontent.blob.core.windows.net/html/airports.js', function () {
        autocomplete(document.getElementById("from"), airports);
        autocomplete(document.getElementById("to"), airports);
    });
});
