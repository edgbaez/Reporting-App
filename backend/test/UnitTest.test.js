import nock from 'nock';
import { expect, request } from 'chai';

import api from '../app';

describe('Article controller', () => {
	let article;

	before(async () => {

	});

	describe('post', () => {
		it('should return the right ', async () => {
			let response = await request(api).post(`/create`, {title:"test",location:"test",description:"test"});
			expect(response).to.have.status(200);
		});
	});

	describe('get all', () => {
		it('should return all values', async () => {
			const response = request(api).get(`/readAll`);
			
			expect(response).to.have.status(200);
		});
	});

	describe('update', () => {
		it('should update data', async () => {
			let response = request(api).get('/read',{title:"test", location: "test1", description:"test1"});
			expect(response).to.have.status(200);
		});
	});

	describe('read by location', () => {
		it('should return the list by location', async () => {
			let response = request(api).get('/read',{location: "test1"});
			expect(response).to.have.status(200);
		});
	});
	
	describe('delete', () => {
		it('delete test', async () => {
			let response = request(api).get('/delete',{title: "test"});
			expect(response).to.have.status(200);
		});
	});
});
