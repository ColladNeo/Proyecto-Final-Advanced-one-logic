// Datos iniciales para poblar la aplicación en localStorage
const initialData = [
    {
        id: 1,
        nombre: 'Fondo Bibliotecas UCLA',
        descripcion: 'Recaudar fondos para materiales y renovaciones de bibliotecas universitarias.',
        montoObjetivo: 5000,
        montoRecaudado: 1250,
        estado: 'ACTIVA',
        fechaInicio: new Date(new Date().getFullYear(), 0, 1).toISOString(),
        fechaCierre: new Date(new Date().getFullYear(), 11, 31).toISOString(),
        aportes: [
            {
                cedula: '12345678',
                nombre: 'María Pérez',
                monto: 250,
                fecha: new Date().toISOString(),
                referencia: 'MP-2025-001'
            },
            {
                cedula: '87654321',
                nombre: 'Juan Gómez',
                monto: 1000,
                fecha: new Date().toISOString(),
                referencia: 'JG-2025-002'
            }
        ]
    },
    {
        id: 2,
        nombre: 'Proyecto Salud Comunitaria',
        descripcion: 'Campaña para apoyar brigadas médicas rurales.',
        montoObjetivo: 8000,
        montoRecaudado: 8000,
        estado: 'COMPLETADA',
        fechaInicio: new Date(new Date().getFullYear(), 2, 1).toISOString(),
        fechaCierre: new Date(new Date().getFullYear(), 5, 30).toISOString(),
        aportes: [
            {
                cedula: '11223344',
                nombre: 'Ana Ruiz',
                monto: 5000,
                fecha: new Date().toISOString(),
                referencia: 'AR-2025-010'
            },
            {
                cedula: '99887766',
                nombre: 'Carlos López',
                monto: 3000,
                fecha: new Date().toISOString(),
                referencia: 'CL-2025-011'
            }
        ]
    }
];
export default initialData;
