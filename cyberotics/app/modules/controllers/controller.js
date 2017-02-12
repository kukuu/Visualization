
'use strict';
var App = angular.module('clientApp', ['ngResource', 'App.filters']);
App.controller('ClientCtrl', ['$scope', function ($scope) {
    $scope.selectedDepartment = [];
    $scope.camURL='../dashboard/gam.html';
    $scope.companyList = [{
        id: 1,
        name: 'United States'
    }, {
        id: 2,
        name: 'Russia'
    }, {
        id: 3,
        name: 'United Kingdom'
    }, {
        id: 4,
        name: 'Japan'
    }, {
        id: 5,
        name: 'France'
    }, {
        id: 6,
        name: 'Canada'
    }, {
        id: 7,
        name: 'Germany'
    }];

    $scope.clients = [{
        name: 'Port 1',
        sname:'00443219908',
        bid:'Tue 01-01-2009 6:00 UTC',
        title: 'Mobile',
        department: {
            id: 1,
            name: 'United States',
            email:'Adam.Barrell@marksandspencer.com',
            camURL:'../dashboard/git/gam/index.html',
        }
    }, {
        name: 'Port 5',
        sname:'Wright',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 1,
            name: 'United States',
            email:'Adam.Wright@marksandspencer.com',
            camURL:'../dashboard/git/gam/index.html',
        }
    }, {
        name: 'Port 7',
        sname:'00443219908',
        bid:'Wed 01-01-2017 6:00 UTC',
        title: 'Mobile',
        department: {
            id: 2,
            name: 'Russia',
            email:'Abdul.Rahim-bhatti@marksandspencer.com'
        }
    },{
        name: 'Port 1',
        sname:'Tustanowski',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'Blaze.Tustanowski@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'Anishkumar',
        bid:'',
        title: 'Back-end Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Alby.Anishkumar@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'Weber',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Anthony.Weber@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Mateen',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Ataussaboor.Mateen@marksandspencer.com'
        }
    }, {
        name: 'Port 5',
        sname:'Mazurenko',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 5,
            name: 'France',
            email:'Alexksandr.Mazurenko@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'Adu-Sarkodie',
        bid:'',
        title: 'Software Development Lead',
        department: {
            id: 1,
            name: 'United States',
            email: 'Alex.Adu-Sarkodie@marksandspencer.com',
            camURL2:'../dashboard/git/alex/activity/by_date.html',
            camDetails:'../dashboard/git/alex/author_details/commits_by_date.html'
        }
    }, {
        name: 'Port 5',
        sname:'Bowen',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 1,
            name: 'United States',
            email:'Alex.Bowen@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'Cloaca',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Andrei.Cloaca@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'John',
        bid:'',
        title: 'Back-end Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'Ansu.John@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Weber',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Anthony.Weber@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Mareddy',
        bid:'',
        title: '',
        department: {
            id: 7,
            name: 'Germany',
            email:'Anusha.Mareddy@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'McSorley',
        bid:'',
        title: 'Back-end Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Robert.McSorley@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'Thomas',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 5,
            name: 'France',
            email:''
        }
    }, {
        name: 'Port 7',
        sname:'Sole',
        bid:'',
        title: 'Web Engineering Manager',
        department: {
            id: 5,
            name: 'France',
            email:'Chris.Sole@marksandspencer.com'
        }
    }, {
        name: 'Port 7',
        sname:'Daskalaki',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 6,
            name: 'Canada',
            email:'Christina.Daskalaki@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'Pavitt',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Daniel.Pavitt@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'',
        bid:'',
        title: '',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:''
        }
    }, {
        name: 'Port 1',
        sname:'Sedyakin',
        bid:'',
        title: 'Platform Engineer',
        department: {
            id: 7,
            name: 'Germany',
            email:'Denis_Sedyakin@epam.com'
        }
    }, {
        name: 'Port 2',
        sname:'Buhtiyarov',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Dmitry.Buhtiyarov@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'Sevlani',
        bid:'',
        title: 'Automation Test Engineer',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:'Ekta.Sevlani@marksandspencer.com'
        }
    }, {
        name: 'Port 4',
        sname:'Colgate',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 5,
            name: 'France',
            email:''
        }
    }, {
        name: 'Port 3',
        sname:'Kupchyk',
        bid:'',
        title: '',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:''
        }
    }, {
        name: 'Port 4',
        sname:'Long',
        bid:'',
        title: '',
        department: {
            id: 2,
            name: 'Russia',
            email:''
        }
    }, {
        name: 'Port 5',
        sname:'Bonet',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 2,
            name: 'Russia',
            email:'Gabriel.N.Bonet@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Jenkins',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: 'United States',
            email:'Gerwyn.Jenkins@marksandspencer.com'
        }
    }, {
        name: 'Port 5',
        sname:'Norman',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'United States',
            email:'Graeme.Norman@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Gehlot',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: 'United States',
            email:''
        }
    }, {
        name: 'Port 4',
        sname:'Allen',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'John.Allen@marksandspencer.com'
        }
    }, {
        name: 'Port 4',
        sname:'Chingandu',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'Keith.Chingandu@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'Mani',
        bid:'',
        title: 'WCS Engineer',
        department: {
            id: 7,
            name: 'Germany',
            email:'Kesavan.Mani@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'Makri',
        bid:'',
        title: '',
        department: {
            id: 5,
            name: 'France',
            email:''
        }
    }, {
        name: 'Port 3',
        sname:'Sandor',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 5,
            name: 'France',
            email:'Krisztian.Sandor@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'Blackwell',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 6,
            name: 'Canada',
            email:'Kymme.Blackwell@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Trinca',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 6,
            name: 'Canada',
            email:'Luca.Trinca@,marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Jordan',
        bid:'',
        title: 'WCS Engineer',
        department: {
            id: 7,
            name: 'Germany',
            email:'Luke.Jordan@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'Jones',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:''
        }
    }, {
        name: 'Port 5',
        sname:'Urey',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:'Margo.Urey@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'Boucek',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'Marian.Boucek@marksandspencer.com'
        }
    }, {
        name: 'Port 5',
        sname:'Bulash',
        bid:'',
        title: '',
        department: {
            id: 2,
            name: 'Russia',
            email:'Mihail_Bulash@epam.com'
        }
    }, {
        name: 'Port 1',
        sname:'Shalchi',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:'Mohammad.Shalchi@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'',
        bid:'',
        title: '',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:''
        }
    }, {
        name: 'Port 7',
        sname:'Vadranam',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'Nagaraju.Vadranam@marksandspencer.com'
        }
    }, {
        name: 'Port 7',
        sname:'Sharma',
        bid:'',
        title: 'Software Development Lead',
        department: {
            id: 2,
            name: 'Russia',
            email:'Neelu.Sharma@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Nanda',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'Russia',
            email:'Neha.Nanda@marksandspencer.com'
        }
    }, {
        name: 'Port 6',
        sname:'Duru',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: 'United States',
            email:'obi.Duru@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'Cheni',
        bid:'',
        title: 'WCS Engineer',
        department: {
            id: 6,
            name: 'Canada',
            email:'Ramu.Cheni@marksandspencer.com'
        }
    }, {
        name: 'Port 1',
        sname:'Wright',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 5,
            name: 'France',
            email:'Rhian.Wright@marksandspencer.com'
        }
    }, {
        name: 'Port 7',
        sname:'Chernenko',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 7,
            name: 'Germany',
            email:''
        }
    }, {
        name: 'Port 7',
        sname:'Shetty',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 7,
            name: 'Germany',
            email:'Sachin.Shetty@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'Rodriguez',
        bid:'',
        title: '',
        department: {
            id: 5,
            name: 'France',
            email:'Samuel.Rodriguez.Perez@marksandspencer.com'
        }
    }, {
        name: 'Port 2',
        sname:'Nandakumar',
        bid:'',
        title: 'Head of Development',
        department: {
            id: 6,
            name: 'Canada',
            email:'Sathya.Nandakumar@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'Oneil',
        bid:'',
        title: '',
        department: {
            id: 2,
            name: 'Russia',
            email:''
        }
    }, {
        name: 'Port 3',
        sname:'White',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: 'United States',
            email:'Simon.A.White@marksandspencer.com'
        }
    }, {
        name: 'Port 4',
        sname:'Makarau',
        bid:'',
        title: 'Platform Engineer',
        department: {
            id: 5,
            name: 'France',
            email:'Siarhei.Makarau@epam.com'
        }
    }, {
        name: 'Port 4',
        sname:'Vasileva',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 5,
            name: 'France',
            email:'Sofiya.Vasileva@marksandspencer.com'
        }
    }, {
        name: 'Port 5',
        sname:'Philip',
        bid:'',
        title: '',
        department: {
            id: 4,
            name: 'Japan',
            email:''
        }
    }, {
        name: 'Port 3',
        sname:'Lea',
        bid:'',
        title: '',
        department: {
            id: 4,
            name: 'Japan',
            email:'Tom.Lea@marksandspencer.com'
        }
    }, {
        name: 'Port 4',
        sname:'D',
        bid:'',
        title: '',
        department: {
            id: 4,
            name: 'Japan',
            email:''
        }
    }, {
        name: 'Port 4',
        sname:'Loganathan',
        bid:'',
        title: '',
        department: {
            id: 4,
            name: 'Japan',
            email:''
        }
    }, {
        name: 'Port 4',
        sname:'Peru',
        bid:'',
        title: '',
        department: {
            id: 2,
            name: 'Russia',
            email:''
        }
    }, {
        name: 'Port 2',
        sname:'Latore',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: 'United States',
            email:'Veronica.GarciaLatorre@marksandspencer.com'
        }
    }, {
        name: 'Port 3',
        sname:'Kamath',
        bid:'',
        title: 'Software Development Lead',
        department: {
            id: 3,
            name: 'United Kingdom',
            email:'Vikram.Kamath@marksandspencer.com'
        }
    }, {
        name: 'Port 4',
        sname:'T',
        bid:'',
        title: '',
        department: {
            id: 7,
            name: 'Germany',
            email:''
        }
    }, {
        name: 'Port 4',
        sname:'Chupin',
        bid:'',
        title: '',
        department: {
            id: 7,
            name: 'Germany',
            email:''
        }
    }, {
        name: 'Port 1',
        sname:'',
        bid:'',
        title: '',
        department: {
            id: 6,
            name: 'Canada',
            email:''
        }
    }, {
        name: 'Port 1',
        sname:'Bowyer',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 6,
            name: 'Canada',
            email:'Zak.Bowyer@marksandspencer.com'
        }
    }];
    //

    $scope.salesData=[
          {hour: 1,sales: 54},
          {hour: 2,sales: 66},
          {hour: 3,sales: 77},
          {hour: 4,sales: 70},
          {hour: 5,sales: 60},
          {hour: 6,sales: 63},
          {hour: 7,sales: 55},
          {hour: 8,sales: 47},
          {hour: 9,sales: 55},
          {hour: 10,sales: 30}
    ];

    // $interval(function(){
    //       var hour=$scope.salesData.length+1;
    //       var sales= Math.round(Math.random() * 100);
    //       $scope.salesData.push({hour: hour, sales:sales});
    // }, 1000, 10);

    //

    $scope.setSelectedClient = function () {
        var id = this.department.id;
        if (_.contains($scope.selectedDepartment, id)) {
            $scope.selectedDepartment = _.without($scope.selectedDepartment, id);
        } else {
            $scope.selectedDepartment.push(id);
        }
        return false;
    };

    $scope.isChecked = function (id) {
        if (_.contains($scope.selectedDepartment, id)) {
            return 'icon-ok pull-right';
        }
        return false;
    };

    $scope.checkAll = function () {
        $scope.selectedDepartment = _.pluck($scope.companyList, 'id');
    };

}]);



