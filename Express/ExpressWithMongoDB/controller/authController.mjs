import { db } from "../connection/connection.mjs";
import bcyrpt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const signup = async (req, res) => {
    try {

        const { username, email, password } = req.body;


        let genSalt = bcyrpt.genSaltSync(12);

        let hashedPassword = bcyrpt.hashSync(password, genSalt)



        await db.collection("users").insertOne({ username, email, password: hashedPassword });

        res.send({ suceessMessage: "User registered successfully!" })

    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error })
    }
}


export const login = async (req, res) => {
    try {


        const {email,password} = req.body;

        let isEmailValid = await db.collection('users').findOne({email: email});

        console.log(isEmailValid);


        if(isEmailValid){
          let isPasswordValid =  bcyrpt.compareSync(password, isEmailValid.password)
          console.log(isPasswordValid)

            if(isPasswordValid){

              let token = jwt.sign({id: isEmailValid._id, username: isEmailValid.username, email: isEmailValid.email},process.env.JWT_SECRET_KEY,{expiresIn: '24h'});
              console.log(token);

              res.send({message: "User login successfully!",token});


            }
            else{
                res.send({message: "Passowrd is invalid!"})
            }

        }
        else{
                res.send({message: "User not found!"})

        }

        // res.send({successMessage: "Email Found"})


    } catch (error) {
        console.log(error);
        res.send({ errorMessage: error })
    }
}

