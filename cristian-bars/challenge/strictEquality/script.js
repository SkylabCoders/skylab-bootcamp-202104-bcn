function strictEquals (a,b){
	if ((typeof a == typeof b) && (!(isNaN(a) || isNaN(b)))){
		if (typeof a == typeof b && a == b){
			console.log(true)
		}else{
			console.log(false)
		}
	}else{
		console.log(false)
	}
}

strictEquals(1,1);
strictEquals(NaN,NaN);
strictEquals(0,-0);
strictEquals(-0,0);
strictEquals(1,"1");
strictEquals(true,false);
strictEquals(false,false);
strictEquals("master","oil");