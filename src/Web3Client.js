let selectedAccount;

export const init = () => {
  let provider = window.etherium;
  if (typeof provider !== "undefined") {
    //metamask is installed.
    provider
      .request({ method: "eth_requestAccount" })
      .then((account) => {
        selectedAccount = account[0];
        console.log("Your selected account is " + selectedAccount);
      })
      .catch((err) => {
        console.log(err);
      });

    window.etherium.on("accountChanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log("Selected account changed to " + selectedAccount);
    });
  }
};
