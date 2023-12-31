<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Leads;

class LeadsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $leads = Leads::all();
        return response()->json($leads);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $lead = new Leads;
        $lead->name = $request->name;
        $lead->mobile_number = $request->mobile_number;
        $lead->email = $request->email;
        $lead->status = $request->status;
        $lead->save();
        return response()->json($lead);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lead = Leads::find($id);
        return response()->json($lead);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $lead = Leads::find($id);
        if ($request->has('name')) {
            $lead->name = $request->name;
        }
        if ($request->has('mobile_number')) {
            $lead->mobile_number = $request->mobile_number;
        }
        if ($request->has('email')) {
            $lead->email = $request->email;
        }
        if ($request->has('status')) {
            $lead->status = $request->status;
        }
        $lead->save();
        return response()->json($lead);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Leads::destroy($id);
        return response()->json(['message' => 'Lead deleted successfully']);
    }
}
