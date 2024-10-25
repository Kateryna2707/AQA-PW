import { test, expect } from '@playwright/test';
import { mainUserEmail, mainUserPassword } from '../../test-data/credentials';
import AuthController from './api-controllers/AuthController';
import CarsController from './api-controllers/CarController';


test.describe('Add cars DDT', () =>{
    let sid: string;

    test.beforeAll(async ({ request }) => {
        const authController = new AuthController(request);
        sid = await authController.signInAndGetCookies(mainUserEmail, mainUserPassword); 
    })

    const carlist = [
        {
        "carBrandId": 2,
        "carModelId": 6,
        "mileage": 122
        },
        {
        "carBrandId": 4,
        "carModelId": 16,
        "mileage": 542
        },
        {
        "carBrandId": 5,
        "carModelId": 22,
        "mileage": 1254
        },
    ]

    carlist.forEach((car) => {
        test(`Car with mileage ${car.mileage} added`, async ({ request }) => {
            const response = await request.post('/api/cars/', {
                data: car,
                headers: {
                    'Cookie': `sid=${sid}`
                }
            });
            console.log(await response.json());
        })        
    })
})

test.describe('Negative tests', () => {
    let sid: string;
    let carsController: CarsController;

    test.beforeAll(async ({ request }) => {
        const authController = new AuthController(request);
        sid = await authController.signInAndGetCookies(mainUserEmail, mainUserPassword); 
    })

    test('Add car with incorrect mileage', async ({ request }) => {
        const carBody = {
            "carBrandId": 2,
            "carModelId": 6,
            "mileage": -122
            }

        const response = await request.post('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            },
            data: carBody
        });
        const body = await response.json();
        expect(body.message).toContain('Mileage has to be from 0 to 999999');
    })

    test('Add a high mileage car', async ({ request }) => {
        const carBody = {
            "carBrandId": 2,
            "carModelId": 6,
            "mileage": 1234567
            }

        const response = await request.post('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            },
            data: carBody
        });
        const body = await response.json();
        expect(body.message).toContain('Mileage has to be from 0 to 999999');
    })

    test('Add car without mileage', async ({ request }) => {
        const carBody = {
            "carBrandId": 2,
            "carModelId": 6
            }

        const response = await request.post('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            },
            data: carBody
        });
        const body = await response.json();
        expect(body.message).toContain('Mileage is required');
    })
    
    test('Add car without car brand', async ({ request }) => {
        const carBody = {
            "carModelId": 6,
            "mileage": 122
            }

        const response = await request.post('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            },
            data: carBody
        });
        const body = await response.json();
        expect(body.message).toContain('Car brand id is required');
    })
        
    test('Add car without car model', async ({ request }) => {
        const carBody = {
            "carBrandId": 2,
            "mileage": 122
            }

        const response = await request.post('/api/cars', {
            headers: {
                'Cookie': `sid=${sid}`
            },
            data: carBody
        });
        const body = await response.json();
        expect(body.message).toContain('Car model id is required');
    })
})