export async function fetchAdminProducts() {
    await new Promise(res => setTimeout(res, 500));
    return [
        { id: 1, title: "Laptop", price: 1000 },
        { id: 2, title: "Phone", price: 600 },
    ];
}