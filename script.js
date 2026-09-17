function toggleMenu(){document.getElementById('navLinks').classList.toggle('show')}
async function submitForm(e){
	e.preventDefault();
	var form=e.target;
	var status=form.querySelector('.form-status');
	if(!form.classList.contains('enroll-form')){
		form.reset();
		alert('Thank you! Your enrollment request has been submitted. Our team will contact you soon.');
		return;
	}
	var formData=new FormData(form);
	var payload={};
	formData.forEach(function(value,key){
		if(key==='subjects[]'){
			if(!payload.subjects){payload.subjects=[];}
			payload.subjects.push(value);
		}else{
			payload[key]=value;
		}
	});
	try{
		var apiUrl=window.location.port==='3000' ? '/api/enroll' : 'http://localhost:3000/api/enroll';
		var response=await fetch(apiUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
		var result=await response.json();
		if(!response.ok){throw new Error(result.message || 'Unable to submit enrollment');}
		form.reset();
		status.textContent='Enrollment request received successfully. Our team will contact you soon.';
		status.hidden=false;
		status.scrollIntoView({behavior:'smooth',block:'nearest'});
	}catch(error){
		status.textContent='Could not connect to the enrollment server. Please start the website with npm start and try again.';
		status.hidden=false;
	}
}

document.querySelectorAll('.class-grid a, .subject-list a, .cards article, .kids-card').forEach(function(card){
	card.addEventListener('click', function(){
		var group = card.closest('.class-grid, .subject-list, .cards, .kids-grid');
		if(group){group.querySelectorAll('.tap-active').forEach(function(activeCard){activeCard.classList.remove('tap-active')})}
		card.classList.add('tap-active');
	});
});
