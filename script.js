// The topics and Keys
var topics = [
    {
        'ana1'  : 'Anatomy',
        'chem'  : 'Chemistry',
        'bio'   : 'Biology',
        'comp'  : 'Computer',
        'phys'  : 'Physics',
        'found' : 'Foundation of Medicine',
        'hum'   : 'Human Rights'
    },
    {
        'ana2'  : 'Anatomy',
        'bioch' : 'Biochemistry',
        'hist'  : 'Histology',
        'emb'   : 'Embryology',
        'phy'   : 'Physiology'
    },
    {
        'phar'  : 'Pharmacology',
        'mic'   : 'Microbiology',
        'para'  : 'Parasitology',
        'path'  : 'Pathology',
        'com1'  : 'Community Medicine',
        'med1'  : 'Medicine',
        'sur1'  : 'Surgery',
    },{
        'med2'  : 'Medicine',
        'sur2'  : 'Surgery',
        'eth'   : 'Medical Ethics',
        'com2'  : 'Community Medicine',
        'for'   : 'Forensic Medicine',
        'beh'   : 'Behavtioral Scinces',
        'obs'   : 'Obstetric',
    },
    {
        'med3'  : 'Medicine',
        'sur3'  : 'Surgery',
        'gyn1'   : 'Gynecology',
        'ped1'   : 'Pediatrics',
        'oph'   : 'Ophthalmology',
        'psy'   : 'Psychiatry',
        'rad'   : 'Radiology',
        'der'   : 'Dermatology',
        'ent'   : 'ENT',
    },
    {
        'med4'  : 'Medicine',
        'sur4'  : 'Surgery',
        'gyn2'  : 'Gynceology',
        'ped2'  : 'Pediatric',
    }
];
// The topics and units
var units = [
    {
        'ana1'  : 8,
        'chem'  : 6,
        'bio'   : 6,
        'comp'  : 4,
        'phys'  : 5,
        'found' : 2,
        'hum'   : 2
    },
    {
        'ana2'  : 10,
        'bioch' : 8,
        'hist'  : 6,
        'emb'   : 2,
        'phy'   : 13
    },
    {
        'phar'  : 8,
        'mic'   : 8,
        'para'  : 6,
        'path'  : 12,
        'com1'  : 3,
        'med1'  : 5,
        'sur1'  : 2,
    },{
        'med2'  : 12,
        'sur2'  : 9,
        'eth'   : 2,
        'com2'  : 11,
        'for'   : 6,
        'beh'   : 2,
        'obs'   : 7,
    },
    {
        'med3'  : 7,
        'sur3'  : 9,
        'gyn1'  : 6,
        'ped1'  : 6,
        'oph'   : 3,
        'psy'   : 4,
        'rad'   : 2,
        'der'   : 3,
        'ent'   : 3,
    },
    {
        'med4'  : 12,
        'sur4'  : 12,
        'gyn2'  : 10,
        'ped2'  : 10,
    }
];

// stage units

var stgUnits = [33, 39, 44, 49, 43, 44];

var stgPercent = [5, 5, 5, 20, 25, 40];

var finalRes = 0;

var stage = 0;

const contaienr = document.getElementById("container");

var degPart = 0;


// Next Button Function

const nextButtonAction = function (stg)
{

    var prevStg = stg - 1;
    var nextStg = stg;

    // Hide previous stage
    document.getElementById(`stage${prevStg}`).style = 'display: none';

    var classD = document.getElementById(`classDeg${prevStg}`);

    var totalStgDeg = 0;


    if(classD.value > 0)
    {
        totalStgDeg = classD.value;
        
    } else {
        // Collect subject values
        var subjects = document.querySelectorAll(`#stage${prevStg} .subject`);



        // Multiply each subject by it units
        subjects.forEach((subject) => {
            totalStgDeg += subject.value * units[prevStg - 1][subject.id];
        })


        // Divide totalStgDeg on total stg units
        totalStgDeg = totalStgDeg / stgUnits[prevStg - 1];
    }

    
    // Convert the deg to the stage percent

    finalRes += (stgPercent[prevStg - 1] * totalStgDeg) / 100;

    // Total Part of Deg

    degPart += stgPercent[prevStg - 1];


    // Check the stage
    if(nextStg == stage) {
        // Show the Result
        document.getElementById("result").style = 'display: block';



        document.querySelector('#result #res').innerHTML = `${finalRes.toFixed(2)} - ${(finalRes + (degPart / 10)).toFixed(2)} / ${degPart}`;

    } else {        
        // show the next stage
        document.getElementById(`stage${nextStg}`).style = 'display: block';
    }

}


// Start Button
document.getElementById("start").addEventListener('click', function(){

    // select the stage

    stage = document.getElementById("stage").value;

    // Hide the cover

    document.getElementById("cover").style = 'display: none';

    // Create form for each stage

    for(let i = 1; i < stage; i++)
    {
        var form = document.createElement('form');
        form.setAttribute('id', 'stage' + i);
        form.classList.add('stage');
        form.style = 'display: none';
        contaienr.appendChild(form);
        var object = topics[(i - 1)];

        // Create Heading

        var heading = document.createElement('h1');
        heading.classList.add('title');
        
        if(i == 1){
            heading.innerHTML = '1st Stage'
        }
        if(i == 2){
            heading.innerHTML = '2nd Stage'
        }
        if(i == 3){
            heading.innerHTML = '3rd Stage'
        }

        if(i > 3){
            heading.innerHTML = `${i}th Stage`
        }

        form.appendChild(heading);

        

        // Create field for every topic

        for (const property in object)
        {

            // Create the contrainer

            var cont = document.createElement('div');
            cont.classList.add('subField');
            form.appendChild(cont);

            var label = document.createElement('label');
            label.setAttribute('for', property);
            label.innerHTML = object[property];
            cont.appendChild(label);

            var select = document.createElement('select');
            select.setAttribute('id', property);
            select.classList.add('subject');
            cont.appendChild(select);

            var opt1 = document.createElement('option');
            opt1.setAttribute('value', 50);
            opt1.innerHTML = 'مقبول';
            select.appendChild(opt1);

            var opt2 = document.createElement('option');
            opt2.setAttribute('value', 60);
            opt2.innerHTML = 'متوسط';
            select.appendChild(opt2);

            var opt3 = document.createElement('option');
            opt3.setAttribute('value', 70);
            opt3.innerHTML = 'جيد';
            select.appendChild(opt3);

            var opt4 = document.createElement('option');
            opt4.setAttribute('value', 80);
            opt4.innerHTML = 'جيد جدا';
            select.appendChild(opt4);

            var opt5 = document.createElement('option');
            opt5.setAttribute('value', 90);
            opt5.innerHTML = 'امتياز';
            select.appendChild(opt5);

        }

        // Class Degree

        var classDeg = document.createElement('input');
        classDeg.setAttribute('type', 'text');
        classDeg.setAttribute('id', `classDeg${i}`);
        classDeg.setAttribute('placeholder', 'المعدل السنوي')
        form.appendChild(classDeg);

        // Create the Next button

        var button = document.createElement('button');
        button.innerHTML = 'Next';
        button.setAttribute('class', 'next' + (i + 1));
        button.classList.add('next');

        button.addEventListener('click', (event) => {
            event.preventDefault();
            nextButtonAction(i + 1);
        });

        form.appendChild(button);

        

    };


    document.getElementById("stage1").style = 'display: block';


});
