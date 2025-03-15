// Code your solution here
const delivery = [
    {
      "name": "James",
      "lastName": "Miller",
      "age": 34,
      "licenseNumber": "A1234567",
      "vehicle": "Toyota Camry",
      "hometown": "Nakuru"
    },
    {
      "name": "Sophia",
      "lastName": "Johnson",
      "age": 28,
      "licenseNumber": "B2345678",
      "vehicle": "Honda Civic",
      "hometown": "Muranga"
    },
    {
      "name": "James",
      "lastName": "Smith",
      "age": 42,
      "licenseNumber": "C3456789",
      "vehicle": "Ford F-150",
      "hometown": "Thika"
    },
    {
      "name": "Emily",
      "lastName": "Williams",
      "age": 30,
      "licenseNumber": "D4567890",
      "vehicle": "Chevrolet Malibu",
      "hometown": "Malindi"
    },
    {
      "name": "Mason",
      "lastName": "Brown",
      "age": 38,
      "licenseNumber": "E5678901",
      "vehicle": "Tesla Model 3",
      "hometown": "Kisumu"
    },
    {
      "name": "Malvin",
      "lastName": "Davis",
      "age": 25,
      "licenseNumber": "F6789012",
      "vehicle": "Nissan Altima",
      "hometown": "Elcoret"
    },
    {
      "name": "Ethan",
      "lastName": "Miller",
      "age": 45,
      "licenseNumber": "G7890123",
      "vehicle": "BMW 3 Series",
      "hometown": "Lamu"
    }
  ]
  function findMatching(delivery, name){
    return  delivery.filter (delivery => delivery.toLowerCase().includes(name.toLowerCase()));
  }
    const result =findMatching(delivery,"Ethan");
    

        function matchName(delivery, name) {
            // Check if delivery is an array
            if (Array.isArray(delivery)) {
                // Filter the delivery array to find objects with a matching name
                const matches = delivery.filter(deliveryItem => deliveryItem.name === name);
                return matches; // Return the array of matching objects
            } else {
                return []; // Return an empty array if delivery is not an array
            }
        }


        function fuzzyMatch(delivery, name) {
            // Filter the drivers array to find names that start with the query
            return delivery.filter(delivery => delivery.toLowerCase().startsWith(name.toLowerCase()));
        }