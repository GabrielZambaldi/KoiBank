<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Http\Resources\AccountResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $accounts = Account::all();
        error_log('passei');
        return response([ 'data' => AccountResource::collection($accounts), 'message' => 'Retrieved successfully'], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $account = Account::create($data);
        return response(['data' => new AccountResource($account), 'message' => 'Created successfully'], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(Account $account)
    {
        return response(['data' => new AccountResource($account), 'message' => 'Retrieved successfully'], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Account $account)
    {
        $data = $request->all();
        $account->update($data);
        return response(['data' => new AccountResource($account), 'message' => 'Update successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Account $account)
    {
        $account->delete();
        return response(['message' => 'Deleted']);
    }
}