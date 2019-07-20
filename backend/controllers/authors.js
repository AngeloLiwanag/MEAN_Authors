// backend logic
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var Authors = mongoose.model('Authors');

module.exports = {
    all: function(req, res){
        Authors.find({}, function(err, author){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            }else{
                console.log('Successfully Found All Authors');
                res.json({author: author})
            }   
        })
    },
    create: function(req, res){
        var author = new Authors(req.body)
        author.save(function(err, author){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            }else{
                console.log('Successfully Created a Author');
                res.json({author: author})
            }
        })
    },
    delete: function(req, res){
        Authors.deleteOne({id:req.body.id}, function(err, author){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                res.json({author:author});
            } 
        })
    },
    edit: function(req, res){
        Authors.update({_id:req.params.id}, {$set: {name: req.body.name}}, function(err, author){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err});
            }else{
                res.json({author: author});
            }
        })
    }
}