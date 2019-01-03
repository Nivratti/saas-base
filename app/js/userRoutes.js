import SamplePage from './views/dashboard/samplePage.vue';
import SampleTable from './views/table.vue';


var userRoutes = [
    { 
        path: '/samplePage', 
        name: 'SamplePage',
        component: SamplePage,
        meta: {
            breadcrumb: [{name: 'Sample page', route: 'SamplePage'}]
        }
        
    },
    { 
        path: '/sampleTable', 
        name: 'SampleTable',
        component: SampleTable,
        meta: {
            breadcrumb: [{name: 'Sample table', route: 'SampleTable'}]
        }
        
    }
];

export default userRoutes;