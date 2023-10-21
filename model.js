function SinhVien(_id,_name,_email,_pass,_math_scores,_literature_score) {
    this.id = _id;   
    this.name = _name;   
    this.email = _email;   
    this.pass = _pass;   
    this.math_scores = _math_scores;   
    this.literature_score = _literature_score;   
    this.tinhDTB = function(){
        return (this.math_scores + this.literature_score)/2
      };
   
}