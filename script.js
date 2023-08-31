const buildIceCreamButton = document.getElementById("build_ice_cream")
const resultDiv = document.getElementById("result")

const makeIcecream = async () => {
    const flavor = document.getElementById("flavor_select").value
    const scoops = parseInt(document.getElementById("scoop_input").value, 10)
    const container = document.getElementById("container_select").value
    const topping = document.getElementById("topping_select").value

    try {
        const iceCream = await buildIceCream(flavor, scoops, container, topping)
        resultDiv.innerHTML = `You've built an ice cream with ${scoops} scoop(s) of ${flavor} ice cream in a ${container} with ${
            topping === "none" ? "no topping" : topping
        }. Enjoy!`
    } catch (error) {
        console.error("Error building ice cream:", error)
        resultDiv.innerHTML =
            "The machine is broken. Please come back again later."
    }
}

// Simulated asynchronous function to build ice cream
const buildIceCream = async (flavor, scoops, container, topping) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate a successful response
            const iceCream = {
                flavor,
                scoops,
                container,
                topping,
            }
            resolve(iceCream)
        }, 2000) // Simulate a 2-second delay
    })
}

buildIceCreamButton.addEventListener("click", makeIcecream)
