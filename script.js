document.addEventListener("DOMContentLoaded", function () {
    // Problem 1
    const fruits = ["apple", "banana", "citrus", "dates"];
    const ulQuestion1 = document.createElement("ul");
    fruits.forEach(function (fruit) {
        const li = document.createElement("li");
        li.textContent = fruit;
        ulQuestion1.appendChild(li);
    });
    const problem1 = document.querySelector("#problem1");
    problem1.appendChild(ulQuestion1);

    // Problem 2
    var cat = document.querySelector("#cat");
    var next = document.querySelector("#next");

    next.addEventListener("click", handleClick);

    function handleClick(e) {
        cat.src = nextCatImageUrl();
        e.stopPropagation();
    }

    var currentCatIndex = 0;

    var cats = [
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto.format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto.format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60"
    ];

    function nextCatImageUrl() {
        currentCatIndex++;

        if (currentCatIndex === cats.length) {
            currentCatIndex = 0;
        }

        return cats[currentCatIndex];
    }

    var load = document.querySelector("#load");

    load.addEventListener("click", loadUrls);

    function loadUrls(e) {
        var ol = document.createElement("ol");
        cats.forEach(function (url) {
            var li = document.createElement("li");
            li.innerHTML = `<a href="${url}">${url}</a>`;
            ol.appendChild(li);
        });

        document.querySelector("#url-list").appendChild(ol);
    }

    setTimeout(function () {
        next.remove();
        load.remove();
    }, 3000);

    setInterval(function () {
        cat.src = nextCatImageUrl();
    }, 1000);

    // Question 3
    const paragraph = document.createElement("p");
    paragraph.textContent = "HELLO WORLD";
    const problem3 = document.querySelector("#problem3");
    problem3.appendChild(paragraph);

    // Question 4
    const form = document.querySelector("#employee-form");
    form.addEventListener("submit", function (e) {
        const name = document.querySelector("#name").value;
        const position = document.querySelector("#position").value;
        const employeeId = document.querySelector("#employeeId").value;
        addEmployeeToList(name, position, employeeId);
        e.preventDefault();
    });

    function addEmployeeToList(name, position, employeeId) {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${name}</td><td>${position}</td><td>${employeeId}</td>`;
        document.querySelector("#employee-list").appendChild(row);
    }

    // Question 5
    const problem5 = document.querySelector("#problem5");
    const employeeList = document.querySelector("#employee-list");

    problem5.addEventListener("click", function () {
        // Show the employee list
        employeeList.style.display = "block";

        const ul = document.createElement("ul");
        myList.forEach(function (item) {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
        });
        document.querySelector("#my-list").appendChild(ul);
    });
});

