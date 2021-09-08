"use strict";


window.onload = function() {
    var listAccount = [];
    var createAccount = function() {
        // var listAccount = [];

        function addAccount(name, deposit) {
            let text = "";
            listAccount.push(new Account(name, deposit))
            listAccount.forEach(acc => text += "Account Name: " + 
            acc.name + " Balance: " +  acc.deposit + "\n");
            document.getElementById("ta").value = text;
        }

        return {
                add: function(name, deposit) {
                    addAccount(name, deposit);
                }
        }

    };

    const Account = function(name, deposit) {
        this.name = name;
        this.deposit = deposit;
    }

    document.getElementById("submit").onclick = function() {
        createAccount().add(
            document.getElementById("name").value,
            document.getElementById("deposit").value);
            document.getElementById("name").value = "";
            document.getElementById("deposit").value = "";

    }
}