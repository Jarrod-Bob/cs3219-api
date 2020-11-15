const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");

chai.use(chaiHttp);
chai.should();

var students = [];

describe("Students", () => {
  describe("POST /students", () => {
    it("should add a new student", (done) => {
      chai
        .request(app)
        .post(`/students`)
        .send({
          name: "jonnycash",
          email: "jc@jc.com",
          faculty: "Science",
          matric: "A111111B",
        })
        .end((err, res) => {
          print(res);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.string("New student created!");
          done();
        });
    });
    it("should add a new student", (done) => {
      chai
        .request(app)
        .post(`/students`)
        .send({
          name: "jonny",
          email: "j@j.com",
          faculty: "Science",
          matric: "A1111112A",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.string("New student created!");
          done();
        });
    });
  });
  describe("GET /", () => {
    it("should get all students record", (done) => {
      chai
        .request(app)
        .get("/students")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.string("Students retrieved successfully");
          students = res.body.data;
          done();
        });
    });
    it("should get a single student at specified id", (done) => {
      const id = students[0]._id;
      chai
        .request(app)
        .get(`/students/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.string("Student details loading..");
          done();
        });
    });
  });

  describe("PUT /students/:id", () => {
    it("should update a single student at specified id", (done) => {
      const id = students[0]._id;
      chai
        .request(app)
        .put(`/students/${id}`)
        .send({
          name: "jonnybravo",
          email: "jb@jb.com",
          faculty: "Business",
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.string("Student Info updated");
          done();
        });
    });
  });
  describe("DELETE /students", () => {
    it("should delete a single student at specified id", (done) => {
      const id = students[0]._id;
      chai
        .request(app)
        .del(`/students/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.message.should.be.string("Student deleted");
          done();
        });
    });
  });
});
